const express = require('express');
const mongoose = require('mongoose');
const app=express();
const methodOverride = require('method-override')
const router= require('./routes/tasks')
const path= require('path')

mongoose.connect('mongodb://127.0.0.1:27017/ToDo', {useNewUrlParser: true, 
useUnifiedTopology: true});

//set view engine
app.set('view engine', 'ejs');
app.use(methodOverride('_method', {methods: ['POST','GET']}));
app.use(express.urlencoded({extended:true}));//so we can read the data from the body
app.use('/', router)
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, ()=>console.log("express started"))
