import ItemCount from "./ItemCount"
import { useContext, useState } from 'react'
import  {CartContext}  from '../context/CartContext'

const ItemDetail = ({product}) => {

  const [counter, setCounter] = useState(1);
  const {isInCart, addProduct} = useContext(CartContext)

  const onAdd = () =>{
      isInCart(product.id)
      addProduct(product, counter)  
  }

          return (
    <div >
          <h3 className="detailTitulo">Este es el detalle del producto</h3>
          <p>{product.name} </p>
          <p>{product.price} </p>
          <p>{product.stock} </p>
          <p>{product.category} </p>
          <img src= {product.pictureURL} />
          <ItemCount counter= {counter} onAdd= {onAdd} setCounter = {setCounter} stock = {product.stock} />
    </div>
  )
}
export default ItemDetail