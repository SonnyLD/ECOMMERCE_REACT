import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex >= 0) {
        // If the item is already in the cart, update its count
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = { ...updatedCart[itemIndex], count: updatedCart[itemIndex].count + count };
        return updatedCart;
      }
      // If the item is not in the cart, add it
      const newItem = { ...item, count };
      return [...prevCart, newItem];
    });
  }

  function removeItem(idToRemove) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
  }

  function getTotalPrecio() {
    return cart.reduce((total, item) => total + item.count * item.precio, 0);
  }

  function getTotalItemCount() {
    return cart.reduce((total, item) => total + item.count, 0);
  }

  return (
    <cartContext.Provider
      value={{ 
        cart, 
        addToCart,
        getTotalPrecio, 
        getTotalItemCount, 
        removeItem, 
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
