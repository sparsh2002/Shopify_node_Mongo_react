import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const apiPassword = process.env.API_PASSWORD
const storeName = process.env.STORE_NAME

const endpoint = 'orders'

const url = `https://${apiKey}:${apiPassword}@${storeName}.myshopify.com/admin/api/2022-10/${endpoint}`


export const getOrderById = async (req , res) =>{
    try {
        const id = req.params.id
        const x = await axios.get(`${url}/${id}.json`)
        res.status(201).json(x.data)
    } catch (e) {
        console.log(e)
    }
}

export const getAllOrders = async (req , res) =>{
    try {
        const x = await axios.get(`${url}.json`)
        res.status(201).json(x.data)
    } catch (e) {
        console.log(e)
    }
}