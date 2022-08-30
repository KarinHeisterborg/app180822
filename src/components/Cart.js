import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut";

const Cart = () => {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  if ((cart.length === 0) && (orderId)) {
    return (
      <div>
        <h2>Compra exitosa!</h2>
        <h4>Tu numero de Orden es:</h4>
        <h3>{orderId} </h3>
        <Link to={"/"}>
          <button>Retornar a la HomePage</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div>
        {cart.length > 0 ? (
          cart.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <img src={element.pictureURL} alt={element.name}></img>
                </div>
                <div>
                  <h3>{element.name}</h3>
                  <h2>Precio: ${element.price}</h2>
                  <h3>Unidades: {element.counter}</h3>
                </div>
                <div>
                  <button onClick={() => deleteItem(element.id)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h1>Tu carrito esta vacio</h1>
            <Link to={"/"}>
              <button>Home</button>
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <div>
            <button onClick={() => emptyCart()}>Vaciar Carrito</button>
            
            <h2>Total: ${getItemPrice()} </h2>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div>
          <CheckOut orderId={orderId} setOrderId={setOrderId} />
        </div>
      )}
    </div>
  );
};
export default Cart;
