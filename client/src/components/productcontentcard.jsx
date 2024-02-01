import React, { useState } from "react"
import ProductModal from "./product-modal"

function ProductCard({product}){

    const [productSelected, setProductSelected] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = async () => {
        
        await setProductSelected(product)
        await setIsOpen(true)

    }


    return (

        <div className={"product-indiv-container px-6 py-8 w-auto"}>
            <div onClick={handleClick} className="relative flex items-center cursor-pointer product-container">
                <img className="product-img" src={product.imageURL}></img>
                {/* <h6 className="product-description absolute px-3 text-center cursor-pointer"> {product.description} </h6>                 */}
            </div>

            <div className="pt-4">
                    
                <h4 className="f-h4-400">{product.name}</h4>
                <h6 className="f-h6-400 line-through">{product.price}</h6>
                <h6 className="f-h6-700">{product.discountedPrice}</h6>

            </div>

            <ProductModal 
                isOpen = {isOpen}
                closeModal={() => setIsOpen(false)}
                product = {productSelected}>
            </ProductModal>


        </div>
    )
}

export default ProductCard