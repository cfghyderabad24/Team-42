import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css'; // Import your CSS file for additional styles
import Navbar from './Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9999/product'); // Ensure this matches your backend endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Define the data you want to send to the cart route
    const cartData = {
      pid: product.pid,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      quantity: 1,
      email: localStorage.getItem("email"),
    };

    axios
      .post("http://localhost:9999/cart/add", cartData)
      .then((response) => {
        console.log("Item added to cart:", response.data);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card className="card">
                <CardMedia
                  component="img"
                  alt={product.name}
                  className="card-media"
                  image={`/Images/${product.image}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="bg-warning display-block mx-auto p-3"
                  >
                    Add To Cart
                  </button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
