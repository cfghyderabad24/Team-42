import React, { useState } from 'react';
import './PaymentForm.css'; // Ensure to update with your CSS file name

const PaymentForm = () => {
    // State for form inputs
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); // New state for address
    const [paymentMethod, setPaymentMethod] = useState('credit'); // Default to credit card
    const [totalAmount, setTotalAmount] = useState(0); // Initialize with your total amount

    // Function to handle form submission
    const handlePayment = (event) => {
        event.preventDefault();
        // Implement payment processing logic here (e.g., API call, validation)
        console.log(`Payment submitted with details:
            Phone Number: ${phoneNumber}
            Name: ${name}
            Email: ${email}
            Address: ${address}
            Payment Method: ${paymentMethod}
            Total Amount: ${totalAmount}`);
        // Add logic for actual payment handling
    };

    return (
        <div className="payment-form">
            <h2>Payment Details</h2>
            <form onSubmit={handlePayment}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <label htmlFor="payment">Payment Method:</label>
                <select
                    id="payment"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>

                <label htmlFor="total">Total Amount:</label>
                <input
                    type="number"
                    id="total"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
                    required
                />

                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentForm;