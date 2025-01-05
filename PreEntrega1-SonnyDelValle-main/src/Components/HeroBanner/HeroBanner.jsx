import React, { useEffect, useRef } from 'react';
import './HeroBanner.css';
import Imagenes from "../Assets/img/Balones.jpg";

export default function HeroBanner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = Imagenes;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Recorre todos los píxeles y establece la transparencia para el fondo blanco
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Si el píxel es blanco (puedes ajustar los valores si es necesario)
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Transparencia
        }
      }

      ctx.putImageData(imgData, 0, 0);
    };
  }, []);

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Choice</p>
        <h3>To Equipment</h3>  
        <canvas ref={canvasRef} className="hero-banner-image"></canvas>
        <div>
          <button type="button" aria-label="Botón con texto">
            <span>Botón con texto</span>
          </button>
          <div className="desc">
            <h5>Productos</h5>
            <p>Especializado</p>
          </div>
        </div>
      </div>
    </div>
  );
}


