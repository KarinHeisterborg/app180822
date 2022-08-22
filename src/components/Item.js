import {Link} from "react-router-dom"

const Item = ({product}) => {
  return (
    <div>
          <h1>{product.name} </h1>
          <h2>{product.price} </h2>
          <img alt={product.name} src={product.pictureURL} ></img>
          <Link to= {`/detail/${product.id}`}><button>ver detalle</button></Link>
    </div>
  )
}
export default Item