// import React from 'react';
// import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';

// const ResponsiveNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand href="/">
//           <img
//             src="/Images/collegelogo.png" // Replace with your logo URL
//             alt="Logo"
//             style={{ width: '40px', marginRight: '10px' }}
//           />
//           College
//         </Navbar.Brand>

//         {/* Toggle for Mobile View */}
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto">
//             {/* Location Selector */}
//             <Nav.Link href="#location">
//               <MdLocationOn size={25} />
//             </Nav.Link>
//           </Nav>

//           {/* Search Bar */}
//           <Form className="d-flex mx-auto" style={{ maxWidth: "30rem", flexGrow: 1 }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px" }}>Search</Button>
//           </Form>

//           {/* Need Counselling Button */}
//           <Nav className="ms-auto">
//             <Nav.Link href="#counseling" className="btn btn-danger ms-3">
//               Need Counselling
//             </Nav.Link>
//           </Nav>

//           {/* Profile Icon */}
//           <Nav>
//             <Nav.Link href="#profile">
//               <FaUserCircle size={30} />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default ResponsiveNavbar;












///////--------------------------2222222222222222222222-------------///
// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';

// const ResponsiveNavbar = () => {
//   // Example course names
//   const courses = [
//     "Computer Science",
//     "Business Administration",
//     "Mechanical Engineering",
//     "Electrical Engineering",
//     "Civil Engineering",
//   ];

//   const careers = [
//     "Software Engineer",
//     "Data Scientist",
//     "Mechanical Engineer",
//   ];

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand href="/">
//           <img
//             src="/Images/collegelogo.png" // Replace with your logo URL
//             alt="Logo"
//             style={{ width: '40px', marginRight: '10px' }}
//           />
//           College
//         </Navbar.Brand>

//         {/* Toggle for Mobile View */}
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto" style={{ color: "white" }}>
//             {/* Add other links */}
          

//             {/* Course Dropdown */}
//             <NavDropdown title="Courses" id="courses-nav-dropdown">
//               {courses.map((course, index) => (
//                 <NavDropdown.Item href={`#${course.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//                   {course}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>

//             {/* Careers Dropdown */}
//             <NavDropdown title="Careers" id="careers-nav-dropdown">
//               {careers.map((career, index) => (
//                 <NavDropdown.Item href={`#${career.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//                   {career}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>

           
//           </Nav>

//           {/* Need Counselling Button */}
//           <Nav className="ms-auto">
//             <Nav.Link
//               href="#counseling"
//               className="btn"
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 borderRadius: "5px",
//                 padding: "10px 20px",
//                 border: "none",
//                 textAlign: "center",
//               }}
//             >
//               Counselling
//             </Nav.Link>
//           </Nav>

//           {/* Profile Icon */}
//           <Nav>
//             <Nav.Link
//               href="#profile"
//               style={{
//                 color: 'white', // Set the color to white
//                 textDecoration: 'none', // Remove any text decoration like underline on hover
//               }}
//             >
//               <FaUserCircle size={30} style={{ color: 'white', marginLeft: "15px" }} /> {/* White icon color */}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default ResponsiveNavbar;




/////////////////////////=---------3-------===///////////////
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css'
const ResponsiveNavbar = () => {
  // Example course names
  const colleges = [
    "Jb Knowledge Park",
    "Pt LR",
    "NGF",
    "SRCM",
    "Advance "
  ];

  const courses = [
    "Computer Science",
    "Management ",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Science",
    "Pharmacy",
    "Law",
    "Mass Communication"

  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="/Images/collegelogo.png" // Replace with your logo URL
            alt="Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          Colleges
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto" style={{ color: "white" }}>
            {/* Placeholder to keep space for other links */}
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {/* Course Dropdown */}
            <NavDropdown title="Colleges" id="courses-nav-dropdown" className="mx-2">
              {colleges.map((colleges, index) => (
                <NavDropdown.Item href={`#${colleges.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  {colleges}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Careers Dropdown */}
            <NavDropdown title="Courses" id="careers-nav-dropdown" className="mx-2">
              {courses.map((courses, index) => (
                <NavDropdown.Item href={`#${courses.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  {courses}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Need Counselling Button */}
            <Nav.Link
              href="#counseling"
              className="btn mx-2"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                padding: "10px 20px",
                border: "none",
                textAlign: "center",
              }}
            >
              Counselling
            </Nav.Link>
          </Nav>

          {/* Profile Icon */}
          <Nav>
            <Nav.Link
              href="#profile"
              style={{
                color: 'white', // Set the color to white
                textDecoration: 'none', // Remove any text decoration like underline on hover
              }}
            >
              <FaUserCircle size={30} style={{ color: 'white', marginLeft: "15px" }} /> {/* White icon color */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
