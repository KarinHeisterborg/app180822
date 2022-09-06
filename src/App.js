import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContextProvider from "./context/CartContext";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
       <CartContextProvider>
        <NavBar />
       <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryName" element= {<ItemListContainer/>}/>
        <Route path="/detail/:id" element= {<ItemDetailContainer/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
        </Routes>     
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
