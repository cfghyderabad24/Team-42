import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center">Sign In</h1>
          <Form onSubmit={handleSubmit}>
           

            

            

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="principal">Principal</option>
                <option value="csr">CSR Representative</option>
                <option value="student">Student</option>
                <option value="tea">Teacher</option>
                <option value="par">Parent</option>
                <option value="academic">Academic Director</option>
                <option value="ngo">NGO</option>
                <option value="other">Other</option>
                
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Sign In
            </Button>
          </Form>
          <div className="text-center mt-3">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
