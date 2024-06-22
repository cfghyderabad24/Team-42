import { BrowserRouter, Route, Switch } from 'react-router-dom';
const React = require('react');
const { useEffect, useState } = require('react');
require('./Shipments.css'); // Import CSS file for Shipments component styling

const Shipments = () => {
    // Mock array of tracked products (replace with actual data from your backend or API)
    const trackedProducts = [
        { 
            name: "Product A",
            carrier: "UPS",
            trackingNumber: "1Z9999999999999999"
        },
        {
            name: "Product B",
            carrier: "FedEx",
            trackingNumber: "999999999999"
        },
        {
            name: "Product C",
            carrier: "USPS",
            trackingNumber: "9400111899224153250202"
        }
        // Add more products as needed
    ];

    // State to hold shipment details
    const [shipmentDetails, setShipmentDetails] = useState([]);

    // Function to fetch shipment details for each product
    const fetchShipmentDetails = (trackedProduct) => {
        // Mock API endpoint (replace with actual API endpoint)
        const apiEndpoint = `https://api.example.com/shipment-details?carrier=${trackedProduct.carrier}&trackingNumber=${trackedProduct.trackingNumber}`;

        // Example fetch request to fetch shipment details
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Assuming data includes shipment details like events array
                const events = data.events;
                const updatedShipmentDetails = [...shipmentDetails, { ...trackedProduct, events }];
                setShipmentDetails(updatedShipmentDetails);
            })
            .catch(error => console.error('Error fetching shipment details:', error));
    };

    // Fetch shipment details on component mount
    useEffect(() => {
        trackedProducts.forEach(product => fetchShipmentDetails(product));
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        React.createElement('div', null,
            React.createElement('div', { className: 'header' },
                React.createElement('h1', null, 'Order Confirmation and Shipment Tracking'),
                React.createElement('p', null, 'Thank you for your purchase!')
            ),

            // Render Shipments component and pass shipmentDetails as prop
            React.createElement('div', { id: 'trackedProducts' },
                shipmentDetails.map(product =>
                    React.createElement('div', { key: product.trackingNumber, className: 'tracked-product' },
                        React.createElement('h2', null, product.name),
                        React.createElement('p', null, `Carrier: ${product.carrier}`),
                        React.createElement('p', null, `Tracking Number: ${product.trackingNumber}`),
                        React.createElement('h3', null, 'Shipment Status:'),
                        React.createElement('ul', { className: 'shipment-events' },
                            product.events && product.events.map((event, index) =>
                                React.createElement('li', { key: index, className: `shipment-event ${event.status}` },
                                    React.createElement('span', null, event.timestamp),
                                    ' - ',
                                    event.description
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

export default Shipments
