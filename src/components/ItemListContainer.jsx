import React from "react";
import './ItemListContainer.css'

export default function ItemListContainer({ greeting }) {
    return (
        <div className="Greeting">
            {greeting}
        </div>
);
}