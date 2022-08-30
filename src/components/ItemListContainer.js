import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, query, where } from "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
 
  const [listProducts, setListProducts] = useState([]);
  const[loading, setLoading]= useState(false)
  const { categoryName } = useParams();


  useEffect(() => {

    const productsCollection = collection (db, "products")

    const filter = ()=>{

      if (!categoryName) {
          return productsCollection
    }else  { 
    
      return query(productsCollection, where("category", "==", categoryName))
     }
     }
     
    getDocs(filter())
       .then ((result) =>{
        const docs = result.docs;
        const productCat = docs.map((element)=>{
          const item = {
            id:element.id,
            ...element.data()
          }
          return item;
        })
        setListProducts (productCat)
       })
       .catch(()=>{
        console.log("error al cargar los productos")
       })
 
  }, [categoryName])

  return (
    <div>
      <ItemList listProducts={listProducts} />
    </div>
  );
};
export default ItemListContainer;

/*
fetch("https://mocki.io/v1/deb83a1f-d70a-4597-a7e2-76938a3ae15f")
.then((res) => res.json())
.then((array) => {
    

  
  if (categoryName != undefined) {
    setListProducts(
      array.filter((product) => product.category == categoryName)
    );
  } else {
    setListProducts(array);
  }
});


        const consulta= getDocs(productsCollection)
    console.log(consulta)

    consulta
         .then(snapshot=>{
              const products= snapshot.docs.map(doc=>{ 
                return { 
                        ...doc.data(),
                        id: doc.id
                 }
         })
         setListProducts (products)
         setLoading(true)
          })
         .catch(err=>{
              console.log(err)
         })
      }else {
        const productosCollection = collection (db, "products")
        const filtro= query (productosCollection, where("category", "==", id))
        const consulta= getDocs(filtro)

        consulta
        .then(snapshot=>{
          const products= snapshot.docs.map(doc=>{ 
            return { 
                    ...doc.data(),
                    id: doc.id
             }

     }
     setListProducts (listProducts)
     setLoading(true)
     })
     .catch (err=>{
      console.log(err)
      })


*/