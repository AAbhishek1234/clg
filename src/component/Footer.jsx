// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Footer.css'; // Your custom styles

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container fluid className="footer-container p-4">
//         <Row className="text-center text-md-left">
//           {/* Column 1: About Section */}
//           <Col xs={12} md={4} className="mb-4">
//             <h5 className="footer-heading">About Us</h5>
//             <p className="footer-text">
//               We help students find the best colleges and universities that suit their future goals. Get in touch with us to know more.
//             </p>
//           </Col>

//           {/* Column 2: Quick Links */}
//           <Col xs={12} md={4} className="mb-4">
//             <h5 className="footer-heading">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="#!" className="footer-link">Home</a></li>
//               <li><a href="#!" className="footer-link">Search Colleges</a></li>
//               <li><a href="#!" className="footer-link">Courses</a></li>
//               <li><a href="#!" className="footer-link">Contact Us</a></li>
//             </ul>
//           </Col>

//           {/* Column 3: Subscribe Section */}
//           <Col xs={12} md={4} className="mb-4">
//             <h5 className="footer-heading">Stay Updated</h5>
//             <Form>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="email" placeholder="Enter your email" className="footer-input" />
//               </Form.Group>
//               <Button variant="danger" type="submit" className="footer-btn">Subscribe</Button>
//             </Form>
//           </Col>
//         </Row>

//         {/* Copyright Section */}
//         <Row className="text-center pt-3">
//           <Col>
//             <p className="footer-copyright">© 2024 Search Colleges. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer mt-auto py-4 bg-dark text-white">
//       <Container>
//         <Row>
//           {/* About Section */}
//           <Col xs={12} md={4}>
//             <h5>About Us</h5>
//             <p>
//               We help students find the right college and university based on their interests and goals. Search from a variety of programs and get personalized recommendations.
//             </p>
//           </Col>

//           {/* Quick Links */}
//           <Col xs={12} md={4}>
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-white">Home</a></li>
//               <li><a href="#" className="text-white">Colleges</a></li>
//               <li><a href="#" className="text-white">Universities</a></li>
//               <li><a href="#" className="text-white">Courses</a></li>
//               <li><a href="#" className="text-white">Contact Us</a></li>
//             </ul>
//           </Col>

//           {/* Contact Info */}
//           <Col xs={12} md={4}>
//             <h5>Contact Us</h5>
//             <p>Email: info@collegesearch.com</p>
//             <p>Phone: +123 456 7890</p>
            
//             {/* Subscribe Form */}
//             <Form>
//               <Form.Group controlId="formSubscribe">
//                 <Form.Label>Subscribe for Updates</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Form.Group>
//               <Button variant="danger" type="submit" className="w-100">
//                 Subscribe
//               </Button>
//             </Form>
//           </Col>
//         </Row>

//         {/* Footer Bottom - Social Media Links */}
//         <Row className="mt-3">
//           <Col className="text-center">
//             <p>Follow us on:</p>
//             <a href="#" className="text-white mx-2"><i className="fab fa-facebook">Facebook</i></a>
//             <a href="#" className="text-white mx-2"><i className="fab fa-twitter">Twitter</i></a>
//             <a href="#" className="text-white mx-2"><i className="fab fa-instagram">Instagram</i></a>
//             <a href="#" className="text-white mx-2"><i className="fab fa-linkedin">Linked</i></a>
//           </Col>
//         </Row>

//         {/* Copyright Section */}
//         <Row className="mt-2">
//           <Col className="text-center">
//             <p>&copy; 2024 College Search. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;






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
              <li><a href="#" className="footer-link">Home</a></li>
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
