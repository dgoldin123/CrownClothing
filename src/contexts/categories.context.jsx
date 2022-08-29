import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
//import SHOP_DATA from '../shop-data.js';  , addCollectionAndDocuments

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  //}, []);
  
  useEffect( () => {
    const getCategoriesMap = async () => {
      //const categoryMap = await getCategoriesAndDocuments('categories');
      const categoryMap = await getCategoriesAndDocuments();
      //console.log('categoryMap', categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);
  
  const value = { categoriesMap };
  //console.log('categoriesMap', categoriesMap);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

/*
import { createContext, useState, useEffect  } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
//import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      console.log('categoryMap', categoryMap);
    }
    getCategoriesMap();
  }, []);

  //useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  //}, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
*/
