import React from 'react';
import './ThankYouModal.css';

export default function ThankYouModal({ orderid }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>¡Compra exitosa!</h1>
        <p>Tu número de orden es: {orderid}</p>
        <button onClick={() => window.location.href = "/"}>Volver al inicio</button>
      </div>
    </div>
  );
}
