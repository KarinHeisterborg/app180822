import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, deleteItem, emptyCart } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <div>
        <div>
          {cart.map((element, index) => {
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
          })}
              <button onClick={() => emptyCart()}>Vaciar Carrito</button>
              <div>
                <Link to={"/CheckOut"}><button>CheckOut</button></Link>
              </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Bienvenido a mi cart</h1>
      <Link to={'/'}><button>Home</button></Link>
    </div>
  );
};
export default Cart;
