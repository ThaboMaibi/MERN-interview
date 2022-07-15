require('dotenv').config()
const express = require('express')
const Routes = require('./routes/routesList')
const bp = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')

// create express app
const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())
// middleware
app.use((req,res,next)=>{
   console.log(req.path,req.method);
   next()
})
// routes 
app.use('/v1/',Routes)
// connect to database
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            // listen for requests
            app.listen(process.env.PORT,()=>{
                console.log('connected and listening on port',process.env.PORT)
            })
        })
        .catch((error)=>{
            console.log(error);
        })