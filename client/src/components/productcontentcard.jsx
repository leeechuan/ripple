import React from "react"


function ProductCard({product}){

    return (

        <div className={"product-indiv-container px-6 py-8 w-auto"}>
            <img className="product-img" src={product.imageURL}></img>
                <div className="pt-4">
                    
                    <h4 className="f-h4-400">{product.name}</h4>
                    <h6 className="f-h6-400 line-through">{product.price}</h6>
                    <h6 className="f-h6-700">{product.discountedPrice}</h6>
                </div>


        </div>
    )
}

export default ProductCard