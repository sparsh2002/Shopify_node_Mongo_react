import express from 'express'
const router = express.Router()

import {getProducts} from '../controllers/productController.js'

router.get('/product-list', getProducts )

export default router