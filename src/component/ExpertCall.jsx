import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi'; // Phone call icon
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../component/Footer'
const ExpertContact = () => {
  const experts = [
    { name: 'Jane Smith', phone: '+1 987 654 321' },
  ];

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Heading */}
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '36px', color: 'black' }}>
        Talk to Admission Experts
      </h2>

      <Row className="justify-content-center">
        {experts.map((expert, index) => (
          <Col xs={12} sm={8} md={4} key={index} className="mb-4 d-flex justify-content-center">
            <Card className="expert-card text-center" style={{ backgroundColor: '#e3f2fd', width: '100%',height:"10rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black' }}>
                  {expert.name}
                </Card.Title>
                <a href={`tel:${expert.phone}`} className="phone-link" style={{ textDecoration: 'none', color: 'black',fontSize: '2rem' }}>
                  <FiPhoneCall size={30} style={{ marginRight: '10px', color: '#1b5e20' }} />
                  <span>{expert.phone}</span>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer/>

      {/* Inline CSS for styling */}
      <style jsx>{`
        .expert-card {
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .expert-card:hover {
          transform: scale(1.05);
        }

        .phone-link {
          font-size: 1.3rem;
          font-weight: bold;
        }

        @media (max-width: 767px) {
          .phone-link {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Container>
    
  );
};

export default ExpertContact;
