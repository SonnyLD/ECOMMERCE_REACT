import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Footer from "./Components/Footer/Footer";
import "./Components/Styles/globals.css";
import { CartContextProvider } from "./Components/context/cartContext";
import CartView from "./Components/CartView/CartView";
import ThankYouModal from "./Components/ThankYouModal/ThankYouModal"; // Importa el nuevo componente

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <HeroBanner />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Disfruta tus productos" />}
            />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartView />} />
            <Route path="/product/:itemID" element={<ItemDetailContainer />} />
            <Route
              path="/thankyou/:orderid"
              element={<ThankYouModal />}
            />
            <Route path="*" element={<h4>No es la ruta! Error: 404</h4>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;


