import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const CollegeApplication = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/ApplicationForm')
  }
   
  
  return (
    <Container fluid className="py-5 text-center" style={{ backgroundColor: '#f9f9f9' }}>
      {/* First Line */}
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <p className="first-line" style={{ fontSize: '1.25rem', color: '#333', fontWeight: 'bold' }}>
            India's Leading Common Application For College Admissions
          </p>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1 className="heading" style={{ fontWeight: 'bold', fontSize: '3.0rem', color: '#48639e' }}>
            500+ Colleges, One Application Form
          </h1>
          <p className="subheading" style={{ fontSize: '1.5rem', color: '#333', marginTop: '10px' }}>
            Applying to your dream colleges made easy!
          </p>

          <Button
            href="#"
            className="mt-4"
            style={{
              backgroundColor: '#48949e',
              borderColor: '#007bff',
              padding: '10px 20px',
              fontSize: '1.2rem',
            }}
           onClick={handleClick}>
            Apply Now 
          </Button>
        </Col>
      </Row>
      {/* Inline CSS for responsive typography */}
      <style jsx>{`
        .first-line {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .heading {
          font-size: 3rem;
        }

        .subheading {
          font-size: 1.25rem;
        }

        @media (min-width: 768px) {
          .heading {
            font-size: 4rem;
          }

          .subheading {
            font-size: 1.5rem;
          }

          .first-line {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .heading {
            font-size: 4.5rem;
          }

          .subheading {
            font-size: 1.75rem;
          }

          .first-line {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default CollegeApplication;
