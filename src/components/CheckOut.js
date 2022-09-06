import { CartContext } from "../context/CartContext";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const CheckOut = ({ setOrderId }) => {
  const { cart, getItemPrice, emptyCart } = useContext(CartContext);
  const [costumer, setCostumer] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    cardNumber: "",
  });

  const handlerChangeInput = (e) => {
    setCostumer({
      ...costumer,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const order = {
      Products: cart,
      buyer: { ...costumer },
      price: getItemPrice(),
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "Orders");
    addDoc(orderCollection, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  return (
    <div className="checkoutForm">
      <h2>Complete el formulario</h2>
      <form onSubmit={handlerSubmit}>
        <TextField
          required
          variant="filled"
          color="success"
          focused
          placeholder="Nombre"
          name="name"
          value={costumer.name}
          onChange={handlerChangeInput}
        />
        <TextField
          required
          placeholder="Apellido"
          name="lastname"
          value={costumer.lastname}
          onChange={handlerChangeInput}
        />
        <TextField
          required
          placeholder="Correo Rlectronico"
          name="email"
          value={costumer.email}
          onChange={handlerChangeInput}
        />
        <TextField
          required
          placeholder="Telefono"
          name="telephone"
          value={costumer.telephone}
          onChange={handlerChangeInput}
        />
        <TextField
          required
          placeholder="Card Number"
          name="cardNumber"
          value={costumer.cardNumber}
          onChange={handlerChangeInput}
        />
        <button className="btnComprar" type="submit">
          Comfirme su compra
        </button>
      </form>
    </div>
  );
};
export default CheckOut;
