const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello from server!");
})

app.put('/user',(req,res)=>{
    res.send("User updated as per put request")
})

app.delete("/user", (req, res) => {
  res.send("User deleted as per delete request");
});

app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)
})