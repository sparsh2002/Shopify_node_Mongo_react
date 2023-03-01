import express from 'express'
import { getAllOrders, getOrderById } from '../controllers/orderController.js'
const router = express.Router()


router.get('/view/:id' , getOrderById)
router.get('/list' , getAllOrders)
export default router