import Item from "./Item";

const ItemList = ({ listProducts }) => {
  return (
    <div>
      {listProducts.map((product, id) => {
        return <Item key={id} product={product} />;
      })}
    </div>
  );
};
export default ItemList;
