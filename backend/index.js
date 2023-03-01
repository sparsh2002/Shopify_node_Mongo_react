
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';

import router from './routes/index.js'
// import {connect} from './db.js'
// import './db.js'
import mongoose from 'mongoose';


// auth
import Shopify from '@shopify/shopify-api';
import session from 'express-session';


dotenv.config()
// connect()
const PORT = process.env.PORT

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const apiPassword = process.env.API_PASSWORD
const storeName = process.env.STORE_NAME
const SCOPES = process.env.SCOPES


const app = express();

app.use(cors())


// app.use(session({
//     secret: 'your-session-secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: true,
//         maxAge: 86400 * 1000 // 24 hours
//     }
// }))


// app.use(
//     '/auth',
//     Shopify.createShopifyAuth({
//       apiKey: apiKey,
//       secret: apiSecret,
//       scopes: SCOPES.split(','),
//       async afterAuth(ctx) {
//         const { shop, code } = ctx.query;
//         const accessToken = await Shopify.ShopifyToken.accessToken({
//           apiKey: SHOPIFY_API_KEY,
//           sharedSecret: SHOPIFY_API_SECRET,
//           code,
//           shop,
//         });
//         ctx.session.shop = shop;
//         ctx.session.accessToken = accessToken;
//         ctx.redirect('/');
//       },
//     })
//   );

// const URI = process.env.MONGODB_URI

const URI = process.env.MONGO_URI
const PROPS = process.env.PROPS
const DB_NAME = process.env.DB_NAME

mongoose.connect(URI+DB_NAME+PROPS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));


// middle ware
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(cookieParser())

app.use("/api", router)

// app.use("/uploads" , express.static(path.join(__dirname,"/../uploads")))
// app.use(express.static(path.join(__dirname,"/../frontend/build")))
app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
        res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`))

    }
    catch (e) {
        res.send("Oops! unexpected error")
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no. ${PORT}`)
})