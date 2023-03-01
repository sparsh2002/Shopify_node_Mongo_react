import express from 'express'
const router = express.Router()
import { getCustomerById, getCustomers, upsertCustomer } from '../controllers/customerController.js'

router.get('/customer-list', getCustomers )
router.get('/view/:id' , getCustomerById)
router.post('/upsert/:id' , upsertCustomer )

export default router