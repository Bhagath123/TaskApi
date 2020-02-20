const express=require('express');
const bodyparser=require('body-parser');
 const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const app=express();
const apiRoutes=require('./Routes/ticket');
app.use(bodyparser.json());

app.use('/api',apiRoutes);


mongoose.connect(process.env.DB_URI,{ useUnifiedTopology: true , useNewUrlParser: true }).then(()=>{
   
    app.listen(5000);
    console.log('connected to db');
    }).catch(err =>{
    console.log(err);
    });
