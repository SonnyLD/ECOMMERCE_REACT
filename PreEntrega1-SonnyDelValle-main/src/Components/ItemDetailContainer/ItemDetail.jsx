import React, {useState} from 'react';
import Items from '../Items/Items';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import ItemCount from '../ItemCount/ItemCount';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Loader from '../Loader/Loader';

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);
  const onAdd = () => {};

  function handleAddToCart(count) {
    addToCart(product, count);
    setCount(count);
  }

  if (product.title)
    return (
      <div>
        <FlexWrapper>
          <div className="productDetails">
            <Items
              title={product.title}
              src={product.src}
              precio={product.precio}
            />
          </div>
        </FlexWrapper>
        <FlexWrapper>
          <div className="product-detail-desc">
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            {count === 0 ? (
              <ItemCount
                onAddToCart={handleAddToCart}
                stock={product.stock}
                initial={0}
                onAdd={onAdd}
              />
            ) : (
              <Link to="/Cart">Ver el carrito</Link>
            )}
          </div>
        </FlexWrapper>
      </div>
    );
  return <Loader />;
};

export default ItemDetail
