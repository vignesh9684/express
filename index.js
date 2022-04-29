const express = require('express')
const app = express()
const port = process.env.port || 8081;

app.get('/',(req, res)=>{
  res.send({message:'Hello'})
})

app.listen(port, ()=>console.log('success'))