const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  phoneNumber: String,
  name: String,
  email: String,
  address: String,
  paymentMethod: String,
  totalAmount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  paymentStatus: String,
  shipmentStatus: String,
});

const Order = mongoose.model('cfgOrder', orderSchema);