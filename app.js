const express =require('express')
const redirect =require('express-redirect')
const app = express();
var db = require("./config/database.js");
const mongoose =require('mongoose')

app.set('view engine', 'ejs');
app.set('views','views');

const normalroutes = require('./ROUTERS/routess.js');

app.use(normalroutes)



const MONGODB_URI="mongodb://localhost:27017/MGOTO";
db();
   app.listen(2000,()=>{
      console.log('server is listening')
   });