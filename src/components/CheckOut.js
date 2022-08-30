import { CartContext } from "../context/CartContext";
import React, {useContext, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "./firebase";

const CheckOut = ({setOrderId}) => {

          const {cart, getItemPrice, emptyCart } = useContext(CartContext);
          const [costumer, setCostumer]= useState({
                    name: '',
                    lastname: '',
                    email: '',
                    telephone: '',
                    cardNumber: '',
                });
          

          const handlerChangeInput = (e) => {
                    setCostumer({
                        ...costumer,
                        [e.target.name]: e.target.value,
                    })
                }

                const handlerSubmit = (e) => {
                    e.preventDefault()
            
                    const order = {
                        Products: cart,
                        buyer: {...costumer},
                        price: getItemPrice(),
                        date: serverTimestamp()
                    }

                    const orderCollection = collection(db, "Orders")
                    addDoc(orderCollection, order)
                    .then((doc)=>{
                        setOrderId(doc.id)
                        emptyCart()
                    })
                }
                        
  return (
    <div className="checkoutForm">
          <h2>Complete el formulario</h2>
          <form onSubmit={handlerSubmit}>
                    <TextField variant="filled" color="success" focused  placeholder="Nombre"
                    name='name'
                    value={costumer.name}
                    onChange={handlerChangeInput}
                    />
                    <TextField placeholder="Apellido"
                    name='lastname'
                    value={costumer.lastname}
                    onChange={handlerChangeInput}
                    />
                    <TextField placeholder="Correo Rlectronico"
                    name='email'
                    value={costumer.email}
                    onChange={handlerChangeInput}
                    />
                    <TextField placeholder="Telefono"
                    name='telephone'
                    value={costumer.telephone}
                    onChange={handlerChangeInput}
                    />
                    <TextField placeholder="Card Number"
                    name='cardNumber'
                    value={costumer.cardNumber}
                    onChange={handlerChangeInput}
                    />
                    <Button  color="error" variant="contained" type="submit">Comfirme su compra</Button>
          </form>
          

    </div>
  )
}
export default CheckOut

