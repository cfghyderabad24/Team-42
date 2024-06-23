import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, TextareaAutosize, Box } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    city: '',
    product: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="principal">Principal</MenuItem>
            <MenuItem value="csr">CSR representative</MenuItem>
            <MenuItem value="stu">Student</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="parent">Parent</MenuItem>
            <MenuItem value="Acad">Academic Director</MenuItem>
            <MenuItem value="ngo">NGO</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Product</InputLabel>
          <Select
            name="product"
            value={formData.product}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="without">coding without computer</MenuItem>
            <MenuItem value="toy">coding toy</MenuItem>
            <MenuItem value="with">coding with computers</MenuItem>
            <MenuItem value="visual">coding for the visually challenged</MenuItem>
            <MenuItem value="model">Hybrid Model</MenuItem>
            <MenuItem value="ai">Artificial Intelligence</MenuItem>
            <MenuItem value="life">Life skills 360 app</MenuItem>
            <MenuItem value="skills">Life skills 360 print</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          minRows={5}
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', marginTop: 16, marginBottom: 16, padding: 8 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
