import React, { useState } from 'react';
import './ItemCount.css'

export default function ItemCount () {
    const [count, actualCount] = useState (0);
    let sumar = () => {
        if (count < 14){actualCount(count + 1)}

    };
    let restar = () => {
        if (count > 1){actualCount(count - 1)}
    };
    let agregarAlCarrito = () => {
        actualCount(0)
    }
    return (
    <div className='itemCount'>
    <div className='botonItem'>
        <div className='divCantidad'>
            <button onClick={restar} className='cantidad'>-</button>
            <p className='cantidad'>Producto <span id="actualCount">{count}</span></p>
            <button  onClick={sumar} id="mainButton" className='cantidad'>+</button>
        </div>
        <div className='divAgregar'>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    </div>
    </div>
    );
};