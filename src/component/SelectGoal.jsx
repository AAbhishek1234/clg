// import React, { useRef } from 'react';
// import { Card, Row, Col, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const scrollRef = useRef(null);

//   // Scroll the container left or right
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         top: 0,
//         left: direction === 'left' ? -300 : 300,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <Container fluid>
//       <div className="scroll-container">
//         <div className="scroll-content" ref={scrollRef}>
//           <Row>
//             {/* Management Card */}
//             <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Management Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>MBA</li>
//                     <li>PGDM</li>
//                     <li>BBA</li>
//                     <li>BBA + MBA</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* Engineering Card */}
//             <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Engineering Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>BTech</li>
//                     <li>MTech</li>
//                     <li>BE</li>
//                     <li>ME</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* Science Card */}
//             <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Science Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>MSc</li>
//                     <li>BSc</li>
//                     <li>BSc Hons</li>
//                     <li>Distance MSc</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* Bootcamp Card */}
//             <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Pharmacy Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>MSc</li>
//                     <li>Bod</li>
//                     <li>Bdf Hons</li>
//                     <li>Distance MSc</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* Commerce Card */}
//             <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Commerce Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>BCom</li>
//                     <li>MFC</li>
//                     <li>BCom (Hons)</li>
//                     <li>MCom</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//               {/* Commerce Card */}
//               <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
//               <Card className="custom-card">
//                 <Card.Body>
//                   <Card.Title className="custom-title">Art Colleges</Card.Title>
//                   <ul className="custom-list">
//                     <li>BCom</li>
//                     <li>MFC</li>
//                     <li>BCom (Hons)</li>
//                     <li>MCom</li>
//                   </ul>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </div>

//       {/* Inline CSS for styling */}
//       <style jsx>{`
//         .scroll-container {
//           position: relative;
//           display: flex;
//           align-items: center;
//           width: 100%;
//           overflow: hidden;
//         }

//         .scroll-content {
//           display: flex;
//           flex-wrap: wrap;
//           width: 100%;
//         }

//         .custom-card {
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           transition: transform 0.2s;
//         }

//         .custom-card:hover {
//           transform: scale(1.05);
//         }

//         .custom-title {
//           font-size: 1.2rem;
//           font-weight: bold;
//         }

//         .custom-list {
//           list-style-type: none;
//           padding-left: 0;
//           margin: 0;
//         }

//         .custom-list li {
//           margin: 5px 0;
//         }

//         @media (max-width: 767px) {
//           .scroll-container {
//             flex-direction: column;
//           }

//           .scroll-content {
//             flex-direction: column;
//             overflow-y: auto;
//             max-height: 80vh;
//           }
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default App;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/ApplicationForm')
  }
  function callClick(){
    navigate('/ExpertCall')
  }
   
   
  return (
    <Container fluid className="py-5">
      {/* Responsive heading */}
      <h2 className="responsive-heading text-center mb-4" style={{ fontWeight: "bold", fontSize: "36px", color: "#333" }}>
        College Search Made Easy
      </h2>

      <Row className="justify-content-center">
        {/* Management Colleges */}
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4 d-flex justify-content-center" onClick={handleClick}>
          <Card className="custom-card text-center" style={{ backgroundColor: "lightblue" }} >
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="custom-title">Apply with one form in 5 minutes</Card.Title>
              <ul className="custom-list">
                Fill your college applications in 5 minutes or less.
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Engineering Colleges */}
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4 d-flex justify-content-center" onClick={callClick}>
          <Card className="custom-card text-center" style={{ backgroundColor: "lightblue" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="custom-title">Talk to admission expert</Card.Title>
              <ul className="custom-list">
                Get free personalized expert guidance on colleges & courses.
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Inline CSS for styling */}
      <style jsx>{`
        .custom-card {
          width: 100%;
          max-width: 600px; /* Increased max width */
          min-height: 250px; /* Adjusted height */
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          padding: 20px;
        }

        .custom-card:hover {
          transform: scale(1.05);
        }

        .custom-title {
          font-size: 1.8rem; /* Slightly larger title */
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .custom-list {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }

        .custom-list li {
          margin: 8px 0;
          font-size: 1.1rem;
        }

        /* Responsive heading */
        .responsive-heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-top: 2rem;
          color: #333;
        }

        @media (max-width: 767px) {
          .responsive-heading {
            font-size: 1.8rem;
          }

          .custom-title {
            font-size: 1.5rem;
          }

          .custom-list li {
            font-size: 1rem;
          }

          .custom-card {
            max-width: 100%; /* Full width on mobile */
            min-height: 280px; /* Adjusted height for smaller screens */
          }
        }
      `}</style>
    </Container>
  );
};

export default App;
