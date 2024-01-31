import React from "react"


function ProductCard({product}){

    return (

        <div className={"product-indiv-container px-6 py-8"}>
            <div className="flex items-center">
            <img className="product-img" src={product.imageURL}></img>
                <div className="pl-3">
                    
                    <h4>{product.name}</h4>
                    <h6>{product.price}</h6>
                    <h6>{product.discountedPrice}</h6>
                </div>

            </div>

        </div>
    )
}


export default ProductCard