import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';

export default function Items(props) {
  const imageUrl = process.env.PUBLIC_URL + props.src; // Asumiendo que las imágenes están en la carpeta public

  return (
    <div className="product-card-container">
      <Link to={`/product/${props.id}`}>
        <div className="product-card">
          <img
            src={imageUrl}
            alt={props.title}  // Usa el título del producto como alt para mayor accesibilidad
            className="product-image"
          />
          <h2 className="product-title">{props.title}</h2>  {/* Añadido una clase específica para el título */}
          <p className="product-detail">{props.detail}</p>
          <p className="product-price">${props.precio}</p>
        </div>
      </Link>
    </div>
  );
}



