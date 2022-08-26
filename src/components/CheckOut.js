import { CartContext } from "../context/CartContext";
import React, {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const CheckOut = () => {

          const {cart, getItemPrice} = useContext(CartContext);
          const [submit, setSubmit] = useState(false)
          const [costumer, setCostumer]= useState({
                    name: '',
                    lastname: '',
                    email: '',
                    telephone: '',
                });
          
          const navigate = useNavigate()

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
                    }
            
                    setSubmit(true)
                    console.log (order)   
                }
              
          if (cart.length === 0) {

                  setTimeout(() =>{
                    navigate("/")
                  }, 3000)
          
                  

                    
                    return (  
                              <div>
                                  <h1>Tu carrito de compras esta vacio</h1>
                                  <h2>En 3 Segundos seras redirigido al Home</h2>
                              </div>
                              
                    )
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
                    <Button  color="error" variant="contained" type="submit">Comfirme su compra</Button>
          </form>
          <hr/>
            {
                submit
                && <div>
                    <h2>Su compra:</h2>
                    <h4>Nombre: {costumer.name}</h4>
                    <h4>Apellido: {costumer.lastname}</h4>
                    <h4>Correo Electrónico: {costumer.email}</h4>
                    <h4>telephone: {costumer.telephone}</h4>
                </div>
            }

    </div>
  )
}
export default CheckOut