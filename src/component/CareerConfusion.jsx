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
          <h2>If you are 11th,12th  and confused about the best career choice,talk to us</h2>
          <p style={{fontSize:"20px",fontWeight:"400"}}>
            Discover your path with college.Explore your interest in various graduation streams and get advice guidance free.
          </p>
          <Button variant="warning" size="lg" style={{backgroundColor:" #F87217 "}} onClick={handleClick}>Get your path</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CareerRecommendation;
