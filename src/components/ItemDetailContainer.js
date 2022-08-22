import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
      const [product, setProduct] = useState({})   
      
      const {id} = useParams()

      useEffect(() => {
           fetch("https://mocki.io/v1/deb83a1f-d70a-4597-a7e2-76938a3ae15f")
             .then(res=>res.json())
             .then(array=>setProduct(array.find(product=>product.id ==id)))
      }, [id]);

  return (
    <div>
          <ItemDetail product= {product} />
    </div>
  )
}
export default ItemDetailContainer