
// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';
// import './Navbar.css'
// const ResponsiveNavbar = () => {
//   // Example course names
//   const colleges = [
//     "Jb Knowledge Park",
//     "Pt LR",
//     "NGF",
//     "SRCM",
//     "Advance "
//   ];

//   const courses = [
//     "Computer Science",
//     "Management ",
//     "Mechanical Engineering",
//     "Electrical Engineering",
//     "Civil Engineering",
//     "Science",
//     "Pharmacy",
//     "Law",
//     "Mass Communication"

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
//           Colleges
//         </Navbar.Brand>

//         {/* Toggle for Mobile View */}
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto" style={{ color: "white" }}>
//             {/* Placeholder to keep space for other links */}
//           </Nav>

//           <Nav className="ms-auto d-flex align-items-center">
//             {/* Course Dropdown */}
//             <NavDropdown title="Colleges" id="courses-nav-dropdown" className="mx-2">
//               {colleges.map((colleges, index) => (
//                 <NavDropdown.Item href={`#${colleges.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//                   {colleges}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>

//             {/* Careers Dropdown */}
//             <NavDropdown title="Courses" id="careers-nav-dropdown" className="mx-2">
//               {courses.map((courses, index) => (
//                 <NavDropdown.Item href={`#${courses.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//                   {courses}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>

//             {/* Need Counselling Button */}
//             <Nav.Link
//               href="#counseling"
//               className="btn mx-2"
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










///////////////////////-------PRACTICE-------------////////////////////////
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const ResponsiveNavbar = () => {
  const [showSubDropdown, setShowSubDropdown] = useState(null); // Track which college's sub-dropdown is shown

  const colleges = [
    {
      name: "Colleges in Delhi Ncr",
      subOptions: ["Delhi University", "Jamia Millia Islamia", "Deen Dayal Upadhyaya College","Indian Institute of Technology (IIT) Delhi","Lady Shri Ram College for Women","Indraprastha Institute of Information Technology","",],
    },
    {
      name: "Colleges in Haryana",
      subOptions: ["Maharishi Markandeshwar University", "J.C Bose University","Jb knowldege Park","Maharishi Dayanand University","NJF college","SRCET"],
    },
    {
      name: "Colleges in Rajasthan",
      subOptions: ["ghi", "jkl"],
    },
    {
      name: "Colleges in Uttarakhand",
      subOptions: ["ghi", "jkl"],
    },
    {
      name: "Colleges in Chandigarh",
      subOptions: ["ghi", "jkl"],
    },
    {
      name: "Colleges in Punjab",
      subOptions: ["ghi", "jkl"],
    },
    {
      name: "Colleges in Uttar Pradesh",
      subOptions: ["ghi", "jkl"],
    },
    {
      name: "Colleges in Maharashtra",
      subOptions: ["ghi", "jkl"],
    },
  ];

  const courses = [
    "Computer Science",
    "Management",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Science",
    "Pharmacy",
    "Law",
    "Mass Communication",
  ];

  // Function to toggle showing sub-options on click
  const handleCollegeClick = (collegeName) => {
    // If in mobile view, toggle sub-dropdown; otherwise do nothing
    setShowSubDropdown(showSubDropdown === collegeName ? null : collegeName);
  };

  const handleMouseEnter = (collegeName) => {
    // Only show on hover if not in mobile view
    if (!isMobile) {
      setShowSubDropdown(collegeName);
    }
  };

  const handleMouseLeave = () => {
    setShowSubDropdown(null);
  };

  // Function to check if the device is mobile
  const isMobile = window.innerWidth <= 768; // You can adjust this value based on your responsive design

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
          <Nav className="me-auto" style={{ color: "white" }}></Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {/* Colleges Dropdown with Sub-options */}
            <NavDropdown
              title="Top colleges in India"
              id="colleges-nav-dropdown"
              className="mx-2"
              align="end"
              onMouseLeave={handleMouseLeave} // Close on mouse leave
            >
              {colleges.map((college, index) => (
                <div key={index}>
                  <NavDropdown.Item
                    onClick={() => handleCollegeClick(college.name)} // Toggle sub-options on click
                    onMouseEnter={() => handleMouseEnter(college.name)} // Show sub-options on hover
                    className="d-flex justify-content-between nav-item"
                  >
                    {college.name}
                  </NavDropdown.Item>
                  {/* Show sub-options only for the selected college */}
                  {showSubDropdown === college.name && (
                    <div className="nested-dropdown">
                      {college.subOptions.map((subOption, subIndex) => (
                        <NavDropdown.Item
                          key={subIndex}
                          href={`#${subOption.toLowerCase()}`}
                        >
                          {subOption}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </NavDropdown>

            {/* Courses Dropdown */}
            <NavDropdown title="Courses" id="courses-nav-dropdown" className="mx-2">
              {courses.map((course, index) => (
                <NavDropdown.Item key={index} href={`#${course.toLowerCase().replace(/\s+/g, '-')}`}>
                  {course}
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

            {/* Profile Icon */}
            <Nav.Link
              href="#profile"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <FaUserCircle size={30} style={{ color: 'white', marginLeft: "15px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
