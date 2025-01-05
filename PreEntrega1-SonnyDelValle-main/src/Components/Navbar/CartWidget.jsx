import { AiOutlineShopping } from "react-icons/ai";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
//import './CartWidget.css';  // Asegúrate de que este archivo existe para estilos adicionales si es necesario

const CartWidget = () => {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    <Link to="/cart" className="cart-link">
      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        {getTotalItemCount() > 0 && (
          <span className="cart-item-qty">{getTotalItemCount()}</span>
        )}
      </button>
    </Link>
  );
};

export default CartWidget;
