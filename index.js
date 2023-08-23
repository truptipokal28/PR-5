const express = require('express');
let port = 8080;
const app = express();
const path=require('path');
const mongoose = require('./config/mongoose');
app.set('view engine','ejs');
app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname,"/public")))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/',require('./routes/indexroutes'));
app.listen(port,(err)=>{ 
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log("port start "+port);
    }
}) 