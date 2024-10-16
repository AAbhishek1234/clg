

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function ShriRam() {
  const [clickedCard, setClickedCard] = useState(null); // State to track the clicked card

  const courses = [
    { name: "Bachelor of Technology (B. Tech)", duration: "4 Years", fees: "1,50,000/-" },
    { name: "Bachelor of Arts (BA)", duration: "3 Years", fees: "30,000/-" },
    { name: "Bachelor of Science (B.Sc)", duration: "3 Years", fees: "35,000/-" },
    { name: "Bachelor of Commerce (B.Com)", duration: "3 Years", fees: "40,000/-" },
    { name: "Bachelor of Education (B.Ed)", duration: "2 Years", fees: "25,000/-" },
    { name: "Bachelor of Physical Education (B.P.Ed)", duration: "2 Years", fees: "50,000/-" },
    { name: "Bachelor of Laws (LLB)", duration: "3 Years", fees: "60,000/-" },
    { name: "Bachelor of Pharmacy (B.Pharm)", duration: "4 Years", fees: "50,000/-" },
    { name: "Bachelor of Hotel Management (BHM)", duration: "4 Years", fees: "55,000/-" },
    { name: "Bachelor of Fine Arts (BFA)", duration: "4 Years", fees: "59,000/-" },
    { name: "Master of Science (M.Sc)", duration: "2 Years", fees: "1,10,000/-" },
    { name: "Master of Technology (M.Tech)", duration: "2 Years", fees: "1,59,000/-" },
    { name: "Master of Business Administration (MBA)", duration: "2 Years", fees: "1,50,000/-" },
    { name: "Master of Computer Applications (MCA)", duration: "2 Years", fees: "1,30,000/-" },
    { name: "Doctor of Philosophy (Ph.D.)", duration: "5 Years", fees: "62,000/-" },
    { name: "Master of Philosophy (M.Phil)", duration: "2 Years", fees: "70,000/-" }
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
            <h1 className="mb-4" style={{ fontWeight: "bold" }}>About  Shri Ram College of Commerce </h1>
            <p style={{ fontSize: "20px" }}>
            The journey from 8, Darya Ganj to the present day Shri Ram College of Commerce represents our evolution from a humble beginning to an illustrious preeminent institution pioneering education in the sphere of commerce, management and economics. The history of Shri Ram
             College of Commerce is best represented 
             in several distinct phases.
             "To achieve and sustain excellence in teaching and research, and enriching local, national and international communities through our research, the skills of our alumni, and the publishing of academic and educational materials"
            </p>
          </Col>

          <Col md={4} className="text-center">
            <img 
              src='/Images/srcc.jpg' 
              style={{ 
                height: "17rem", 
                width: "100%", 
                borderRadius: "10px" 
              }} 
              alt="University" 
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
        The Placement Cell, Shri Ram College of Commerce is a professional body incorporated for facilitating recruitment of the country’s top 1% of the brightest minds by global corporations. The Placement Cell serves as a liaison between the companies and the students and works tirelessly to match the repute and eminence that the college is renowned for. This season, the Cell shall be adopting a hybrid mode of recruitment processes in accordance with recruiters’ 
        preference to provide them with a hassle-free hiring experience.<br/>
        Shri Ram College of Commerce continues to achieve remarkable milestones, with the Recruitment Season 2023-24 boasting 500+ offers and attracting 135+ recruiters from diverse sectors. 
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
        <p style={{ fontSize: "20px" }}>INR 35 LPA </p>
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Average Package</h3>
        <p style={{ fontSize: "20px" }}>INR 4 LPA</p>
        <div className="d-flex justify-content-center" style={{ marginBottom: "30px" }}>
          <Button 
            variant="warning" 
            size="lg" 
            style={{ 
              backgroundColor: "#FA8072", 
              width: "100%", 
              maxWidth: "300px" 
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

export default ShriRam;
