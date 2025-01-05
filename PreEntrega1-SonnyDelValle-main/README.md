Proyecto ecommerce
Proyecto creado para la evaluacion del curso de REACT en coderhouse

Instalacion
Se descarga los archivos del repositorio de GITHUB https://github.com/SonnyLD/PreEntrega1-SonnyDelValle.git

##Inicio Se inicia con npm start

USO
Se genero la APP:

<div className="App"> 
<CartContextProvider> 
<BrowserRouter> 
<Navbar /> 
<HeroBanner /> 
<Routes> 
<Route path="/" element={<ItemListContainer geeting="Disfruta tus productos" />} /> 
<Route path="/category/:categoryID" element={<ItemListContainer />} /> 
<Route path="/cart" element={<CartView />}></Route> 
<Route path="/product/:itemID" element={<ItemDetailContainer />} /> 
<Route path="/cart" element={<CartView />}></Route> 
<Route path="/thankyou/:orderid" element={<h1>Gracias por tu compra</h1>} ></Route> 
<Route path="*" element={<h4>No es la ruta! Error: 404</h4>} /> 
</Routes> 
<Footer /> 
</BrowserRouter> 
</CartContextProvider> 
</div>

Espectativa
Se desarrollo con el fin de cumplir la consigna de forma correcta.

Licencia
CHOICE
