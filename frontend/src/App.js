import React from 'react';
import './App.css'; // Import CSS file for component styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shipments from './Shipment'; // Updated import statement for Shipments component
import PaymentForm from './PaymentForm'; // Updated import statement for PaymentForm component

const App = () => {
    return (
        <Router>
            <div className="container">
                <div className="header">
                    <h1>Order Management System</h1>
                    <p>Welcome to our platform!</p>
                </div>

                {/* Route paths for Shipments and PaymentForm components */}
                <Routes>
                    <Route path="/" element={<Shipments />} />
                    <Route path="/payment" element={<PaymentForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;