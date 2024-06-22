const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const ordersRoute = require('./Routes/OrdersRoute');
const Product = require('./Routes/Product');
const Category = require('./Routes/CategoriesRoute');
const cart = require('./Routes/CartRoute');
const Razorpay = require('razorpay');
const paymentRoute = require('./Routes/PaymentRoute');

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
app.use('/product', Product);
app.use('/orders', ordersRoute);
app.use('/categories', Category);
app.use('/cart', cart);
app.use('/payment', paymentRoute);
const razorpay = new Razorpay({
  key_id: '',
  key_secret: ''
});

app.post('/create-order', async (req, res) => {
  const { name, email, phone, amount, razorpay_payment_id } = req.body;

  try {
      // Log incoming order details for debugging
      console.log("Received order details:", { name, email, phone, amount, razorpay_payment_id });

      // Create the order in your backend database
      // This is where you save the order details including the payment ID
      const orderDetails = {
          name,
          email,
          phone,
          amount,
          payment_id: razorpay_payment_id,
          order_id: "order_" + new Date().getTime() // Example order ID
      };

      console.log("Saving order details:", orderDetails); // Debug statement
      
      // Save orderDetails in your database here

      res.json({ success: true, order_id: orderDetails.order_id });
  } catch (error) {
      console.error("Error creating order:", error);
      res.json({ success: false, message: 'Failed to create order' });
  }
});

app.listen(9999, () => {
  console.log('server started at port 9999');
});
