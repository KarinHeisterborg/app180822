import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { db } from "./firebase";
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
      const [product, setProduct] = useState({})   
      
      const {id} = useParams()

      useEffect(() => {

        const productosCollection = collection (db, "products")
        const referencia = doc(productosCollection, id)
        getDoc(referencia)
            
             .then((result)=> {
                setProduct( { ...result.data(),
                              id: result.id})
             })
              
             .catch ((err)=> {
                console.log("Error al cargar el detalle.")  
            })
      }, [id]);

  return (
    <div className="itemList">
          <ItemDetail product= {product} />
    </div>
  )
}
export default ItemDetailContainer