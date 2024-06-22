const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: String,
  name: String,
  email: String,
  phone: String,
  amount: Number,
  payment_id: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ordercfg", orderSchema);
