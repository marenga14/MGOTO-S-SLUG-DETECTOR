const express =require('express')
const redirect =require('express-redirect');
const mongoose =require('mongoose')
const slug=express.Router()
const normal =require('../controllers/normal')
slug.get('/',normal.getinputs)
slug.post('/',normal.postInputs)


module.exports= slug;