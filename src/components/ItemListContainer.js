import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
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
  }, [categoryName]);
  console.log(listProducts);
  return (
    <div>
      <ItemList listProducts={listProducts} />
    </div>
  );
};
export default ItemListContainer;
