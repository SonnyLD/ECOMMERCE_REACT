import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import UserForm from "../UserForm/UserForm";
import './CartView.css'; // Importa un archivo CSS para los estilos

function CartView() {
    const { cart, removeItem, getTotalPrecio } = useContext(cartContext);

    return (
        <FlexWrapper className="cart-view">
          {cart.length === 0 ? (
            <h2>El carrito está vacío</h2>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <h2>{product.title}</h2>
                <h4>Precio: ${product.precio}</h4>
                <h4>Productos: {product.count}</h4>
                <h4>Precio Total: ${product.precio * product.count}</h4>
                <button onClick={() => removeItem(product.id)}>Borrar</button>
              </div>
            ))
          )}

          <UserForm cart={cart} getTotalPrecio={getTotalPrecio} />
        </FlexWrapper>
    );
}

export default CartView;


    