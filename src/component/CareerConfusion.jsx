import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const CareerRecommendation = () => {
    const navigate = useNavigate();
    function handleClick(){
      navigate('/ExpertCall')
    }
  return (
    <Container fluid className="text-center py-5" style={{ backgroundColor: ' #FEF0E3' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2>If you are passing out 12th class and confused about the best career choice, talk to our expert!</h2>
          <p style={{fontSize:"20px",fontWeight:"400"}}>
           Explore your interest in various graduation streams. Discover the career and college of your choice.
          </p>
          <Button variant="warning" size="lg" style={{backgroundColor:" #F87217 "}} onClick={handleClick}>Get started</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CareerRecommendation;
