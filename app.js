const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const dotenv = require('dotenv')



const app = express();
app.use(cors());
app.use(bodyParser.json())

const connectDB = require('./controller/index');

connectDB();

app.use("/",require('./routes/index'))

app.listen(2000,()=> {console.log('connect');})