require("dotenv").config()
const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
app.use(express.json())
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}))
const router = require('./src/routes/routes')
app.get('/working',(req,res)=>{
    res.json({
        message:'working fineee'
    })
})

app.use('/laptop',router) 
 app.listen(2309,(req,res)=>
 {
     console.log('Server up and runnung')
 }) 