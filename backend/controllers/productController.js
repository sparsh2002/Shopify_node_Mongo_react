import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const apiPassword = process.env.API_PASSWORD
const storeName = process.env.STORE_NAME

const endpoint = 'products.json'

const url = `https://${apiKey}:${apiPassword}@${storeName}.myshopify.com/admin/api/2022-10/${endpoint}`
// const url = 'https://9f526c087a8fb662b3cdc4302a754096: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@super-assistant-122.myshopify.com/admin/api/2022-10/products.json'
export const getProducts = async (req , res) =>{
    try {
        const x = await axios.get(url)
        res.status(201).json(x.data)
    } catch (e) {
        console.log(e)
    }


}

