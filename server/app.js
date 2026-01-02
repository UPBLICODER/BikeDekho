const express = require('express')
const connectDB = require('./db')
const router = require('./routes')

require("dotenv").config();

const app = express()

app.use(express.json())

connectDB();

app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("Hello from server!");
})

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)
})