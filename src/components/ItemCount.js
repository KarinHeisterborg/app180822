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
    <div className="counter">
      <div className="counter">
        <button className="btnComprar" onClick={substract}>
          -
        </button>

        <h3>{counter} </h3>
        <button className="btnComprar" onClick={add}>
          +
        </button>
      </div>

      <button
        className="btnComprar"
        onClick={() => {
          onAdd();
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
