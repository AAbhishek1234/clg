import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <Container>
        <Row>
          {/* About Section */}
          <Col xs={12} md={4}>
            <h5>About Us</h5>
            <p>
              We help students find the right college and university based on their interests and goals. Search from a variety of programs and get personalized recommendations.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Colleges</a></li>
              <li><a href="#" className="footer-link">Universities</a></li>
              <li><a href="#" className="footer-link">Courses</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@collegesearch.com</p>
            <p>Phone: +123 456 7890</p>
            
            {/* Subscribe Form */}
            <Form>
              <Form.Group controlId="formSubscribe">
                <Form.Label>Subscribe for Updates</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="danger" type="submit" className="w-100" style={{marginTop:"1rem"}}>
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Bottom - Social Media Links */}
        <Row className="mt-3">
          <Col className="text-center">
            <p>Follow us on:</p>
            <a href="#" className="footer-link"><i className="fab fa-facebook"></i>Facebook</a>
            <a href="#" className="footer-link"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="footer-link"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="footer-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-2">
          <Col className="text-center">
            <p>&copy; 2024 College Search. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
