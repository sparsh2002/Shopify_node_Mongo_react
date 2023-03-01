import express from 'express'
const router = express.Router()
import productRoutes from './productRoutes.js'
import customerRoutes from './customerRoutes.js'
import orderRoutes from './orderRoutes.js'
router.get("/" , (req , res) => {
    res.send("This api is reserved for BELOGG App")
})

router.use("/products" ,productRoutes)
router.use("/customers", customerRoutes)
router.use("/orders" , orderRoutes) 

export default router