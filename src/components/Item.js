import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="detail">
      <h1>{product.name} </h1>
      <h2>$ {product.price} </h2>
      <img className="img" alt={product.name} src={product.pictureURL}></img>
      <div>
        <Link to={`/detail/${product.id}`}>
          <button className="btnComprar">Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};
export default Item;
