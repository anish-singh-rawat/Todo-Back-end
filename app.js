const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/TodoRoutes');
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = 5000;
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>  console.log('connect success with mongodb'))
.catch((err)=> console.log('connect error', err))

app.use(routes)

app.listen(PORT,()=>{
    console.log(`Port is listing on PORT no. : ${PORT}`);
});