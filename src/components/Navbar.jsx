import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="logotitulo">
                <h1 className="lucero">Lucero Mates</h1>
            </div>
            <div>
                <Link to="/ItemListContainer">Item List Container</Link>
                <Link to="/BodyPrincipal">Body Principal</Link>
                <Link to="/ItemCount">Item Count</Link>    
            </div>
        </nav>
    )
}
