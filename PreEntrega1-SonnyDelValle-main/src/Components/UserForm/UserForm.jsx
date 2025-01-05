import React, { useState } from "react";
import { createBuyOrder } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import InputForm from "./InputForm";

export default function UserForm({ cart, getTotalPrecio }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const { name, value } = evt.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart,
      total: getTotalPrecio(),
      date: new Date(),
    };

    createBuyOrder(orderData)
      .then((respuesta) => {
        Swal.fire({
          title: "Gracias!",
          text: "Gracias por tu compra",
          icon: "success",
          confirmButtonText: "Listo",
        }).then(() => {
          navigate(`/thankyou/${respuesta}`);
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema con la compra. Intenta de nuevo.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        console.error("Error creating order: ", error);
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Crear tu pedido</button>
    </form>
  );
}
