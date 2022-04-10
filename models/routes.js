const express =require('express')
const redirect =require('express-redirect')
const mongoose =require('mongoose')
const Schema =mongoose.Schema;

const newdata = new Schema({
GV:{
    type:Number,
    required:true
},
LV:{
    type:Number,
    required:true
},
IA:{
    type:Number,
    required:true
},
PD:{
    type:Number,
    required:true
},
PL:{
    type:Number,
    required:true
},
LD:{
    type:Number,
    required:true
},


})

module.exports= mongoose.model ('data',newdata)