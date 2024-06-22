const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.kyiehv9.mongodb.net/');



// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

// Create a new order
app.post('/create-order', async (req, res) => {
    const { phoneNumber, name, email, address, paymentMethod, totalAmount } = req.body;

    try {
        const options = {
            amount: totalAmount * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt#${Math.floor(Math.random() * 1000)}`
        };

        const order = await razorpay.orders.create(options);

        const newOrder = new Order({
            phoneNumber,
            name,
            email,
            address,
            paymentMethod,
            totalAmount,
            razorpayOrderId: order.id,
            paymentStatus: 'pending',
            shipmentStatus: 'pending',
        });

        await newOrder.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Verify payment
app.post('/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const crypto = require('crypto');
    const shasum = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET');
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest === razorpay_signature) {
        await Order.findOneAndUpdate(
            { razorpayOrderId: razorpay_order_id },
            {
                razorpayPaymentId: razorpay_payment_id,
                razorpaySignature: razorpay_signature,
                paymentStatus: 'success',
            }
        );

        res.status(200).json({ status: 'success' });
    } else {
        await Order.findOneAndUpdate(
            { razorpayOrderId: razorpay_order_id },
            {
                paymentStatus: 'failure',
            }
        );

        res.status(400).json({ status: 'failure' });
    }
});

// Mock Shipment Details Endpoint
app.get('/shipment-details', async (req, res) => {
    const { carrier, trackingNumber } = req.query;

    // Simulate fetching shipment details from a third-party API
    console.log(`Fetching shipment details for ${carrier} tracking number: ${trackingNumber}`);

    // Mock shipment events
    const shipmentEvents = [
        { timestamp: '2024-06-20T10:00:00Z', status: 'In Transit', description: 'Package is in transit.' },
        { timestamp: '2024-06-21T14:00:00Z', status: 'Out for Delivery', description: 'Package is out for delivery.' },
        { timestamp: '2024-06-22T16:00:00Z', status: 'Delivered', description: 'Package delivered to the recipient.' }
    ];

    res.status(200).json({
        trackingNumber,
        carrier,
        events: shipmentEvents
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
