// MOCKED DATABASE: Static product data
const products = [
    { _id: 'p1', name: 'Premium Gym Bag', price: 49.99, description: 'Durable and stylish gym bag.' },
    { _id: 'p2', name: 'Weighted Jump Rope', price: 19.99, description: 'Perfect for cardio workouts.' },
    { _id: 'p3', name: 'High-Density Yoga Mat', price: 29.99, description: 'Extra thick for comfort.' }
];

// //GET all products
const getProducts = async (req, res) => {
    res.status(200).json(products);
}


//GET a single product
const getProduct = async (req, res) => {
    const { id } = req.params
    const product = products.find(p => p._id === id);

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
}


module.exports = {
    getProducts,
    getProduct,
}

