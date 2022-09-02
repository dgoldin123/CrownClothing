import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; //old
//import { useDispatch, useSelector } from 'react-redux' //me
import { selectCartItems } from '../../store/cart/cart.selector'; //old
//import { selectCartItems, selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'; //me
//import { setIsCartOpen } from '../../store/cart/cart.action';// me
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
 // const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckoutHandler = () => {
    //setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

/*
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems,setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => { 
    setIsCartOpen(false);
    navigate('/checkout'); 
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
*/
