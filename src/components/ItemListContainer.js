import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    const filter = () => {
      if (!categoryName) {
        return productsCollection;
      } else {
        return query(productsCollection, where("category", "==", categoryName));
      }
    };

    getDocs(filter())
      .then((result) => {
        const docs = result.docs;
        const productCat = docs.map((element) => {
          const item = {
            id: element.id,
            ...element.data(),
          };
          return item;
        });
        setListProducts(productCat);
      })
      .catch(() => {
        console.log("error al cargar los productos");
      });
  }, [categoryName]);

  return (
    <div className="ilc" >
      {Object.keys(listProducts).length > 0 ? (
        <ItemList listProducts={listProducts} />
      ) : (
        <CircularProgress  size='15vh' disableShrink />
      )}
    </div>
  );
};
export default ItemListContainer;
