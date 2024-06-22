const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const ordersRoute = require('./Routes/OrdersRoute'); 
const Product=require('./Routes/Product');
const Category=require('./Routes/CategoriesRoute');

const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.kyiehv9.mongodb.net/';
const userRoute = require('./Routes/userRoutes');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
  console.log('connected with mongodb');
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/product',Product);
app.use('/orders', ordersRoute);
app.use('/categories',Category)

app.listen(9999, () => {
  console.log('server started at port 9999');
});
