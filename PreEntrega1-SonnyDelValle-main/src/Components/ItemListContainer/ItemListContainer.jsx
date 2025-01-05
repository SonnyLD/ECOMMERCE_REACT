import React, {useState, useEffect} from 'react';
import { getProduct, getProductByCategory } from '../services/firebase';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

export default function ItemListContainer( ){
 

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    setProductList([])
    if (categoryID === undefined) {
      getProduct().then((data) => {
        setProductList(data);
        setIsLoading(false);
      });
    } else {
      getProductByCategory(categoryID).then((data) => {
        setProductList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);
  return (
    
    <div className='container'>
    {isLoading ? (
      <FlexWrapper><Loader /></FlexWrapper>
    ) : (
      <ItemList productList={productList} />
    )}
  </div>
);
}

 

 