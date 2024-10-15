import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "./Navbar.css";

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track if it's mobile view
  const [expanded, setExpanded] = useState(false); // To manage the open/close state of the Navbar
  const navigate = useNavigate(); // Initialize useNavigate

  const colleges = [
    {
      name: "Colleges in Delhi Ncr",
      url: "/delhiuniversity", 
    },
    {
      name: "Colleges in Haryana",
      url: "/harayana", 
     
    },
    {
      name: "Colleges in Rajasthan",
      url: "/colleges/Rajasthan", 
     
    }, {
      name: "Colleges in Uttar Pradesh",
      url: "/colleges/uttarpradesh", 
     
    }, {
      name: "Colleges in Uttarakhand",
      url: "/colleges/uttarakhand", 
     
    }, {
      name: "Colleges in Chandigarh",
      url: "/colleges/chandigarh", 
     
    },
    {
      name: "Colleges in Punjab",
      url: "/colleges/punjab", 
     
    },
    {
      name: "Colleges in Himachal Pradesh",
      url: "/colleges/himachalpradesh", 
     
    },
  ];

  const courses = [
    "Computer Science",
    "Management",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
  ];

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/Images/collegelogo.png" // Replace with your logo URL
            alt="Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          Colleges
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto" style={{ color: "white" }}></Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {/* Colleges Dropdown */}
            <NavDropdown
              title="Colleges in India"
              id="colleges-nav-dropdown"
              className="mx-2"
              align="end"
              onClick={() => isMobile && setExpanded(true)} // Keep the menu expanded in mobile view
            >
              {colleges.map((college, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    navigate(college.url); // Navigate to the main college page
                  }}
                >
                  {college.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Courses Dropdown */}
            <NavDropdown title="Courses" id="courses-nav-dropdown" className="mx-2">
              {courses.map((course, index) => (
                <NavDropdown.Item
                  key={index}
                  href={`#${course.toLowerCase().replace(/\s+/g, "-")}`}
                >
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
                color: "white",
                textDecoration: "none",
              }}
            >
              <FaUserCircle size={30} style={{ color: "white", marginLeft: "15px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
