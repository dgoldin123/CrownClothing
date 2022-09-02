import { useSelector } from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Sub Total</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;


/*
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.jsx';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'><span>Product</span></div>
        <div className='header-block'><span>Description</span></div>
        <div className='header-block'><span>Quantity</span></div>
        <div className='header-block'><span>Price</span></div>
        <div className='header-block'><span>SubTotal</span></div>
        <div className='header-block'><span>Remove</span></div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
*/
