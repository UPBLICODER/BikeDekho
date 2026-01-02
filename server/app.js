const express = require('express')
const connectDB = require('./db')
const router = require('./routes')

const app = express()

app.use(express.json())

connectDB();

app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("Hello from server!");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)
})