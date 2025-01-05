import React from 'react';
import { PropagateLoader } from 'react-spinners';
//import './Loader.css';  // Importa un archivo CSS para centrar el loader

function Loader() {
  return (
    <div className="loader-container">
      <PropagateLoader size={40} color="#4f5251" />
    </div>
  );
}

export default Loader;
