import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderTracking.css';

const OrderTracking = () => {
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [error, setError] = useState('');

  // Function to fetch order status from backend
  const fetchOrderStatus = async () => {
    try {
      const orderId = localStorage.getItem('orderId');
      const response = await axios.get(`http://localhost:9999/order-status/${orderId}`);
      setShipmentStatus(response.data.shipmentStatus);
      setError('');
    } catch (err) {
      setError('Error fetching order status');
    }
  };

  // useEffect to fetch order status on component mount
  useEffect(() => {
    fetchOrderStatus(); // Initial fetch on mount

    // Polling mechanism to fetch order status every 30 seconds
    const intervalId = setInterval(() => {
      fetchOrderStatus();
    }, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to determine the status index for display
  const getStatusIndex = () => {
    switch (shipmentStatus) {
      case 'packed':
        return 1;
      case 'shipped':
        return 2;
      case 'out for delivery':
        return 3;
      default:
        return 0;
    }
  };

  // Render the component based on status and error
  return (
    <div className="tracking-container">
      <h2>Order Tracking</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="tracking-status">
        <div className={`status-dot ${getStatusIndex() >= 1 ? 'active' : ''}`}>Packed</div>
        <div className={`status-line ${getStatusIndex() >= 2 ? 'active' : ''}`}></div>
        <div className={`status-dot ${getStatusIndex() >= 2 ? 'active' : ''}`}>Dispatched</div>
        <div className={`status-line ${getStatusIndex() >= 3 ? 'active' : ''}`}></div>
        <div className={`status-dot ${getStatusIndex() >= 3 ? 'active' : ''}`}>Out for Delivery</div>
      </div>
    </div>
  );
};

export default OrderTracking;
