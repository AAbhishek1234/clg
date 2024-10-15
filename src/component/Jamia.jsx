// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';

// function DelhiUni() {
//   const [clickedCard, setClickedCard] = useState(null); // State to track the clicked card

//   const courses = [
//     { name: "Bachelor of Technology (B. Tech)", duration: "4 Years", fees: "1,50,000/-" },
//     { name: "Bachelor of Arts (BA)", duration: "3 Years", fees: "30,000/-" },
//     { name: "Bachelor of Science (B.Sc)", duration: "3 Years", fees: "35,000/-" },
//     { name: "Bachelor of Commerce (B.Com)", duration: "3 Years", fees: "40,000/-" },
//     { name: "Bachelor of Education (B.Ed)", duration: "2 Years", fees: "25,000/-" },
//     { name: "Bachelor of Physical Education (B.P.Ed)", duration: "2 Years", fees: "50,000/-" },
//     { name: "Bachelor of Laws (LLB)", duration: "3 Years", fees: "60,000/-" },
//     {name:"Bachelor of Pharmacy (B.Pharm)", duration:"4 Years",fees:"50,000/-"},
//     {name:"Bachelor of Hotel Management (BHM)", duration:"4 Years",fees:"55,000/-"},
//     {name:"Bachelor of Fine Arts (BFA)", duration:"4 Years",fees:"59,000/-"},
//     { name: "Master of Science (M.Sc)", duration: "2 Years", fees: "1,10,000/-" },
//     {name:"Master of Technology (M.Tech)", duration:"2 Years",fees:"1,59,000/-"},
//     { name: "Master of Business Administration (MBA)", duration: "2 Years", fees: "1,50,000/-" },
//     { name: "Master of Computer Applications (MCA)", duration: "2 Years", fees: "1,30,000/-" },
//     {name:"Doctor of Philosophy (Ph.D.)", duration:"5 Years",fees:"62,000/-"},
//     {name:"Master of Philosophy (M.Phil)", duration:"2 Years",fees:"70,000/-"}
//   ];

//   const handleCardClick = (index) => {
//     setClickedCard(index); // Set the clicked card index
//   };

//   const navigate = useNavigate();
//   function call() {
//     navigate('/ExpertCall');
//   }

//   return (
//     <>
//       <Navbar />
//       <Container className="mt-5">
//         <Row className="align-items-center">
//           <Col md={8}>
//         <h1 className="mb-4" style={{ fontWeight: "bold" }}>About Delhi University</h1>
//             <p style={{ fontSize: "20px" }}>
//             The University of Delhi is a premier university 
//             of the country with a venerable legacy and international 
//             acclaim for highest academic standards, diverse educational
//              programmes, distinguished faculty, illustrious alumni, varied co-curricular 
//              activities and modern infrastructure. Over the many years of its existence,
//               the University has sustained the highest global standards and best practices 
//               in higher education. Its long-term commitment to nation building and unflinching 
//               adherence to universal human values are reflected in its motto: 'Nishtha Dhriti
//                Satyam' 'निष्ठा धृति सत्यम्' (Dedication, Steadfastness and Truth). 

//             </p>
//           </Col>

//           <Col md={4} className="text-center">
//             <img 
//               src='/Images/du.webp' 
//               style={{ 
//                 height: "17rem", 
//                 width: "100%", 
//                 borderRadius: "10px" 
//               }} 
//               alt="Delhi University" 
//             />
//           </Col>
//         </Row>

//         {/* Courses Section */}
//         <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>University Courses, Fees, and Duration</h3>
//         <Row className="g-2">
//           {courses.map((course, index) => (
//             <Col md={4} className="mb-2" key={index}>
//               <Card
//                 className={`h-100 shadow-sm ${clickedCard === index ? 'shadow-lg' : ''}`}
//                 style={{
//                   maxWidth: "18rem",
//                   transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                   cursor: "pointer"
//                 }}
//                 onMouseEnter={(e) => {
//                   if (clickedCard !== index) {
//                     e.currentTarget.style.transform = "scale(1.05)";
//                     e.currentTarget.classList.add("shadow-lg");
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (clickedCard !== index) {
//                     e.currentTarget.style.transform = "scale(1)";
//                     e.currentTarget.classList.remove("shadow-lg");
//                   }
//                 }}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <Card.Body>
//                   <Card.Title>{course.name}</Card.Title>
//                   <Card.Text>
//                     <strong>Duration:</strong> {course.duration} <br />
//                     <strong>Fees:</strong> {course.fees}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Placements</h3>
//         <p style={{ fontSize: "20px" }}>
//         The Central Placement Cell of DU is organising this placement fair. Earlier, Lady Shri Ram College for Women Undergrad student grabs the highest package of INR 49 LPA during LSR placements 2024. Further, the average package offered during LSR placements 2024 stood at INR 15 LPA. The top recruiters during LSR placements 2024 included BCG, HUL and Bank of America. Further, the highest and average package offered during SRCC placements 2024 stood at INR 35 LPA and INR 12.73 LPA, respectively. Further, the highest
//          and average stipend offered during SRCC internships 2024 stood at INR 88,120 per month and INR 3,67,000 per month, respectively.
//         </p>
//         <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Top Recruiter</h3>
        
     
//         <div className="d-flex justify-content-center" style={{ marginBottom: "30px" }}>
//           <Button 
//             variant="warning" 
//             size="lg" 
//             style={{ 
//               backgroundColor: "#FA8072", 
//               width: "100%", // Full width on mobile
//               maxWidth: "300px" // Max width for larger screens
//             }} 
//             onClick={call}
//           >
//             Contact Us 
//           </Button>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default DelhiUni;




import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Jamia() {
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
            <h1 className="mb-4" style={{ fontWeight: "bold" }}>About Jamia Millia Islamia</h1>
            <p style={{ fontSize: "20px" }}>
            Jamia Millia Islamia, an institution originally established at Aligarh in United Provinces, India in 1920 became a Central University by an act of the Indian Parliament in 1988. In Urdu language
            , Jamia means ‘University’, and Millia means ‘National’.
The story of its growth from a small institut
ion in the pre-independence India to a central u
niversity located in New Delhi—offering integrated educati
on from nursery to research in specialized areas—is a saga of dedication,
 conviction and vision of a people who worked against all odds and saw it
  growing step by step. They “built up the Jamia Millia stone by stone and 
  sacrifice by sacrifice,” said Sarojini Naidu, the nightingale of India.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <img 
              src='/Images/jamia.jpg' 
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
            <ul>
        Around 70% of students are placed every year.
        The lowest package offered in 2023 was INR 3 LPA.<br/> 
        Top recruiters in 2023 included KPMG, Accenture, and DLF. <br/>
        The MCA program's students take part in a six-month internship 
        with the industry as part of the curriculum.<br/>
        JMI's placement cell organizes various events to help students, including industrial visits,
        career fairs, and industry guest speakers.
</ul>
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
        <p style={{ fontSize: "20px" }}>INR 25 LPA</p>
        <h3 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>Average Package</h3>
        <p style={{ fontSize: "20px" }}>INR 4 LPA</p>
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

export default Jamia;
