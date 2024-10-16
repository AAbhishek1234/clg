

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function NationalLaw() {
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
            <h1 className="mb-4" style={{ fontWeight: "bold" }}>About  National Law University Delhi </h1>
            <p style={{ fontSize: "20px" }}>
The primary objective of the University is to evolve and impart comprehensive and interdisciplinary legal education that is socially relevant.

Through this education, we aim to promote legal and ethical values and foster the rule of law and the objectives enshrined in the Constitution of India. Furthermore, the University works toward dissemination of legal knowledge and its role in national development, so that the ability to analyse and present contemporary issues of public concern and their legal implications 
for the benefit of the public is improved.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <img 
              src='/Images/nlu1.jpg' 
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
        The National Law University, Delhi (NLUD) has seen a significant increase in the number of placement offers and salary packages in 2024 compared to previous years. Here are some of the highlights 
        of the 2024 placement season at NLU Delhi.<br/>
        The average placements for its graduates were between INR 10-14 lakhs per annum, while the highest placements touched INR 22 lakhs per annum. Leading law firms such as Shardul Amarchand Mangaldas, Luthra & Luthra, and international consultancies like
         McKinsey recruited actively from the campus.
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
        <p style={{ fontSize: "20px" }}>INR 19LPA </p>
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

export default NationalLaw;
