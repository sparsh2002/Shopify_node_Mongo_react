import dotenv from 'dotenv'
import axios from 'axios'
import Customer from '../models/customerModel.js'
import { ObjectId } from 'mongodb'
dotenv.config()

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const apiPassword = process.env.API_PASSWORD
const storeName = process.env.STORE_NAME

const endpoint = 'customers.json'

const url = `https://${apiKey}:${apiPassword}@${storeName}.myshopify.com/admin/api/2022-10/`

export const getCustomers = async (req , res) =>{
    try {
        const x = await axios.get(`${url}/${endpoint}`)
        res.status(201).json(x.data)
    } catch (e) {
        console.log(e)
    }
}

export const getCustomerById = async (req , res) =>{
    try {
        const id = req.params.id
        // console.log(req.params.id)
        const x = await axios.get(`${url}/customers/${id}.json`)
        // console.log(x)
        res.status(201).json(x.data)
    } catch (e) {
        console.log(e)
    }
}

export const upsertCustomer = async (req , res) =>{
    try {
        const id = req.params.id
        const body = req.body
        // console.log(id , body)
        const cus = {
            customer_id:id,
            first_name : body.first_name,
            last_name :body.last_name
        }

        console.log(cus)

        // Customer.findOneAndUpdate({customer_id: id} , cus, { useFindAndModify: false })
        // .then(res.status(201).json({sucess:true}))
        // .catch(e =>{
        //     res.status(400).json({message:`Error: ${e}` , success:false})
        // })
        Customer.create(cus)
        .then(res.status(201).json({sucess:true}))
        .catch(e =>{
            res.status(400).json({message:`Error: ${e}` , success:false})
        })
        
    } catch (error) {
        console.log(error)
    }
}


