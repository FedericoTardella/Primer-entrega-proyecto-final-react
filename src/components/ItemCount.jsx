import React, { useState } from "react";

import "./ItemCount.css";

export default function ItemCount() {
  const [count, setCount] = useState(0); //* Los estados siempre van con el nombre, y la funcion para volver a setearlos SIEMPRE se pone set+nombre del estado

  let sumar = () => {
    if (count < 14) {
      setCount(count + 1);
    }
  };

  let restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  let agregarAlCarrito = () => {
    console.log(count);
    setCount(0);
  };

  return (
    <div className="itemCount">
      <div className="botonItem">
        <div className="divCantidad">
          <button onClick={restar} className="cantidad">
            -
          </button>
          <p className="cantidad">
            Producto <span id="actualCount">{count}</span>
          </p>
          <button onClick={sumar} id="mainButton" className="cantidad">
            +
          </button>
        </div>
        <div className="divAgregar">
          <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
