import React from 'react';
import img from '../images/ropa_full.png';

export default function Item(props) {
    return (
            <div id={props.id} className="d-flex flex-column productCard rounded mx-3 my-4">
                <img src={img} alt="" className="cardImage rounded"/>
                <div className="d-flex flex-column p-3 cardDetail">
                    <span className="productName">{props.name}</span>
                    <span className="productPrice">${props.price}</span>
                </div>
            </div>
    )
}