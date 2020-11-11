import React from 'react';

function Products(props){
    return (
        <div>
            <h2>{props.products.name}</h2>
            <p>{props.products.price.toLocaleString("en-US",{style: "currency", currency: "USD"})} - {props.products.description}</p>
        </div>
    )
}

export default Products