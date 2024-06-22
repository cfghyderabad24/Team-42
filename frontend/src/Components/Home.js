import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import './Home.css'; // Import your CSS file for additional styles

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of Product 1',
    src: image2,
    price: '$29.99'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of Product 2',
    src: image3,
    price: '$39.99'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description of Product 3',
    src: image4,
    price: '$19.99'
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description of Product 4',
    src: image5,
    price: '$49.99'
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description of Product 5',
    src: image6,
    price: '$24.99'
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description of Product 6',
    src: image7,
    price: '$34.99'
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description of Product 7',
    src: image8,
    price: '$44.99'
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description of Product 8',
    src: image9,
    price: '$54.99'
  },
];

function Home() {
  return (
    <div className="home-container">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="card">
              <CardMedia
                component="img"
                alt={product.title}
                className="card-media"
                image={product.src}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                
                <button type="button" className='bg-warning display-block mx-auto p-3'>Add To Cart</button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
