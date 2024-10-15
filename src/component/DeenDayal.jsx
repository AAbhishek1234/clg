import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function DeenDayal() {
  const [clickedCard, setClickedCard] = useState(null); // State to track the clicked card

  const courses = [
    { name: "Bachelor of Arts (BA)", duration: "3 Years", fees: "30,000/-" },
    { name: "Bachelor of Science (B.Sc)", duration: "3 Years", fees: "35,000/-" },
    { name: "Bachelor of Commerce (B.Com)", duration: "3 Years", fees: "40,000/-" },
    { name: "Certificate in Russian Language", duration: "6 Month", fees: "10,000" },
    { name: " Certificate in French Language", duration: "6 Month", fees: "12,000" },
    { name: "Certificate in German Language", duration: "6 Month", fees: "14,000" },
    { name: "Certificate in Spanish Language", duration: "6 Month", fees: "15,000" },
  ];

  const handleCardClick = (index) => {
    setClickedCard(index); // Set the clicked card index
  };

  const navigate = useNavigate();
  function call() {
    navigate('/ExpertCall');
  }

  // Array of top recruiters
  const companies = [
    "Accenture",
    "Wipro",
    "TCS",
    "EY",
    "Capgemini",
    "Genpect",
    " Bajal Capital",
  
  ];

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="mb-4" style={{ fontWeight: "bold" }}>About Delhi University</h1>
            <p style={{ fontSize: "20px" }}>
            Deen Dayal Upadhyaya is a constituent college of the University of Delhi. 
            The Government of National Capital Territory of Delhi established the college 
            in the year 1990 in Karampura. The college receives 100% grant from the Govt. 
            of NCT of Delhi and is recognized under 2 (f) and 12 (b) of the UGC Act. We cater
             to the students of Delhi as well as neighboring states, particularly Haryana, 
             Uttar Pradesh, Rajasthan, Madhya Pradesh and Bihar. 
            Recently we have shifted to our new campus in Sector-3, Dwarka. 
            </p>
          </Col>

          <Col md={4} className="text-center">
            <img 
              src='/Images/deendayal.jpg' 
              style={{ 
                height: "17rem", 
                width: "100%", 
                borderRadius: "10px" 
              }} 
              alt="Delhi University" 
            />
          </Col>
        </Row>

        {/* Courses Section */}
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>University Courses, Fees, and Duration</h3>
        <Row className="g-2">
          {courses.map((course, index) => (
            <Col md={4} className="mb-2" key={index}>
              <Card
                className={`h-100 shadow-sm ${clickedCard === index ? 'shadow-lg' : ''}`}
                style={{
                  maxWidth: "18rem",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  if (clickedCard !== index) {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.classList.add("shadow-lg");
                  }
                }}
                onMouseLeave={(e) => {
                  if (clickedCard !== index) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.classList.remove("shadow-lg");
                  }
                }}
                onClick={() => handleCardClick(index)}
              >
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>
                    <strong>Duration:</strong> {course.duration} <br />
                    <strong>Fees:</strong> {course.fees}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Placements</h3>
        <p style={{ fontSize: "20px" }}>
        Top recruiting companies like KPMG Global, EY GDS, Grant Thornton, NIIT, Genpact, Wipro, Bajal Capital, etc., visit our campus.
        one of the top constituent college of the University of Delhi, Delhi, India.<br/>
        Our college provides various placement opportunities of students of various courses.
        </p>
        
        {/* Top Recruiters Section */}
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Top Recruiters</h3>
        <div className="d-flex justify-content-between flex-wrap" style={{ gap: "20px", marginBottom: "30px" }}>
          {companies.map((company, index) => (
            <div key={index} className="company-name" style={{
              padding: "10px 20px",
              border: "1px solid #FA8072",
              borderRadius: "5px",
              backgroundColor: "#f8f9fa",
              textAlign: "center",
              minWidth: "120px"
            }}>
              {company}
            </div>
          ))}
        </div>
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Highest Package</h3>
        <p style={{ fontSize: "20px" }}>INR 21.50 LPA</p>
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Average Package</h3>
        <p style={{ fontSize: "20px" }}>INR 7 LPA</p>
        <div className="d-flex justify-content-center" style={{ marginBottom: "30px" }}>
          <Button 
            variant="warning" 
            size="lg" 
            style={{ 
              backgroundColor: "#FA8072", 
              width: "100%", // Full width on mobile
              maxWidth: "300px" // Max width for larger screens
            }} 
            onClick={call}
          >
            Contact Us 
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default DeenDayal;
