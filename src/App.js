import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import index from "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
       <Routes>
        <Route path="/" element={<ItemListContainer/>} ></Route>
        <Route path="/category/:categoryName" element= {<ItemListContainer/>}></Route>
        <Route path="/detail/:id" element= {<ItemDetailContainer/>}></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
        <Route path="*" element= {<Error/>}></Route>
        </Routes>     
      </BrowserRouter>
    </>
  );
}

export default App;
