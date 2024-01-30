const Product = require('../models/productModel')
const mongoose = require ('mongoose')


// //GET all products
    const getProducts = async (req, res) => {
    const user_id = req.user._id


    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


//GET a single product
const getProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such product'})
        
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
}


module.exports = {
    getProducts,
    getProduct,
}

