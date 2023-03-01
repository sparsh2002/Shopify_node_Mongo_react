import mongoose from 'mongoose'


const CustomerSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,

    }
} , {timestamps:true})

const Customer = mongoose.model("Customer" , CustomerSchema)

export default Customer