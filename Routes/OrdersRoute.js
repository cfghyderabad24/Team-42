const express = require("express");
const router = express.Router();
const OrderModel = require("../models/orderSchema");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: '',
  key_secret: ''
});

// Create an order
router.post("/create-order", async (req, res) => {
  const { name, email, phone, amount, razorpay_payment_id } = req.body;

  try {
    // Log incoming order details for debugging
    console.log("Received order details:", { name, email, phone, amount, razorpay_payment_id });

    // Create the order in your backend database
    // This is where you save the order details including the payment ID
    const orderDetails = new OrderModel({
      name,
      email,
      phone,
      amount,
      payment_id: razorpay_payment_id,
      order_id: "order_" + new Date().getTime() // Example order ID
    });

    console.log("Saving order details:", orderDetails); // Debug statement
    
    // Save orderDetails in your database
    const savedOrder = await orderDetails.save();

    res.json({ success: true, order_id: savedOrder.order_id });
  } catch (error) {
    console.error("Error creating order:", error);
    res.json({ success: false, message: "Failed to create order" });
  }
});

module.exports = router;
