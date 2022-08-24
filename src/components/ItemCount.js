const ItemCount = ({ counter, setCounter, onAdd, stock }) => {
  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };


  return (
  <div>
   <button onClick={add}>+</button>
   <h3>{counter} </h3>
   <button onClick={substract}>-</button>
   <button onClick={() => {onAdd()}}>Agregar al carrito</button>
   </div>
  )
};
export default ItemCount;
