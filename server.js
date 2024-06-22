const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const ordersRoute = require('./Routes/OrdersRoute'); 

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
app.use('/orders', ordersRoute);

app.listen(9999, () => {
  console.log('server started at port 9999');
});
