import React from 'react';
import Items from '../Items/Items';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Imagenes from "../Assets/Imagenes.js";
function ItemList(props) {
 
    return (
      <>
        <FlexWrapper>
          {props.productList.map((product) => {
            return (
              <Items
                key={product.id}
                id={product.id}
                title={product.title}
                src={[product.src]} 
                precio={product.precio}
                stock={product.stock}
                detail={product.detail}
              />
            );
          })}
        </FlexWrapper> 
      </> 
    );
    
  }
  
  export default ItemList;

