import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const URI = process.env.MONGO_URI
const PROPS = process.env.PROPS
const DB_NAME = process.env.DB_NAME


// export function connect (){
    mongoose.connect(URI , {
        useNewUrlParser :true,
        useUnifiedTopology :true,
    }).then(()=>{
        console.log('MongoDB connected successfully!')
    }).catch((error)=>{
        console.log("Error: " , error)
    })
// }