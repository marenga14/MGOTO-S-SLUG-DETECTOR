const express =require('express')
const redirect =require('express-redirect')
const data =require('../models/routes')


exports.getinputs=(req,res,next)=>{
    res.render('index')
}
    exports.postInputs =(req,res,next)=>{
const gasv =req.body.GV
const liquidv =req.body.LV
const iangle =req.body.IA
const pdiameter =req.body.PD
const ldensity =req.body.LD
 const plength =req.body.PL






 
 const datas= new data({
GV:gasv,
LV:liquidv,
IA:iangle,
PD:pdiameter,
LD:ldensity,
PL:plength

 }).then(result=>{
     datas.save()
 }).catch(err=>{
     console.log(err)
 })

    }
