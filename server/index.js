const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const authController = require("./controllers/authController")
const productController = require("./controllers/productController")
const uploadController = require("./controllers/uploadController")
const { connectDB } = require("./db");
connectDB();


const app = express();

// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images' ,express.static('public/images'))
app.use('/auth',authController)
app.use('/product',productController)
app.use('/upload',uploadController)
//start server
app.listen(process.env.PORT , () => console.log(`Server is running`))




//we are using cors ? bcz our server is at 5000 but our client is at 3000 so to make a connection between them 