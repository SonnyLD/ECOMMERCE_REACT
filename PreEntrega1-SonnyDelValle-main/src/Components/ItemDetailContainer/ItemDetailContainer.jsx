import React, {useState, useEffect} from 'react'
import { getUnProduct } from '../services/firebase'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();
 
  useEffect(() => {
      getUnProduct(itemID).then((data) =>{
        console.log("getProduct");
      setProduct(data);
    })
    .catch((error) => {
      console.log("Catch?")
      setFeedbackMsg(error.message);
     });
   },[itemID]);

  return (
    <FlexWrapper>
    {feedbackMsg !== null ? (
      <h4>Error: {feedbackMsg}</h4>
    ) :(
      <ItemDetail product={product} />
    )}

    </FlexWrapper>

      );
    }



