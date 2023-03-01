import axios from 'axios'

const url = 'http://localhost:5001/api'

export const getAllProducts = async () =>{
    try{
        const res = await axios.get(`${url}/products/product-list`)
        return res.data
    }catch(e){
        console.log(e)
    }
}


export const getAllCustomers = async () =>{
    try {
        const res = await axios.get(`${url}/customers/customer-list`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getCustomerByIdApi = async (id) =>{
    try {
        const res = await axios.get(`${url}/customers/view/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


// Orders


export const getOrderByIdApi = async (id) =>{
    try {
        console.log(id)
        const res = await axios.get(`${url}/orders/view/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllOrdersApi = async () =>{
    try {
        const res = await axios.get(`${url}/orders/list`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


