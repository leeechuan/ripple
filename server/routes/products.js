const express = require('express')
const {
    getProducts,
    getProduct
} = require('../controllers/productControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require auth fot all product routes
router.use(requireAuth)

// GET all products
router.get('/', getProducts)

// GET a single product
router.get('/:id', getProduct)



module.exports = router