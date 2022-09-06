import { createContext, useState } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const addProduct = (product, counter) => {
    const newProduct = {
      ...product,
      counter,
    };
    if (isInCart(newProduct.id)) {
      const findProduct = cart.find((product) => product.id === newProduct.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].counter += counter;
      setCart(auxArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const deleteItem = (id) => {
    return setCart(cart.filter((product) => product.id !== id));
  };

  const emptyCart = () => {
    return setCart([]);
  };

  const getCantProducts = () => {
    return cart.reduce((acc, product) => (acc += product.counter), 0);
  };

  const getItemPrice = () => {
    return cart.reduce(
      (acc, product) => (acc += product.price * product.counter),
      0
    );
  };

  return (
    <Provider
      value={{
        cart,
        addProduct,
        isInCart,
        deleteItem,
        emptyCart,
        getCantProducts,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
};
export default CartContextProvider;
