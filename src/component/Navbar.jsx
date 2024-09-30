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

import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ResponsiveNavbar = () => {
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
          College
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto" style={{color:"white"}}>
            {/* Location Selector with Google Map Link */}
            {/* <Nav.Link href="https://www.google.com/maps/place/YOUR_LOCATION_LINK" target="_blank">
              <MdLocationOn size={25} />
            </Nav.Link> */}
          </Nav>

          {/* Search Bar */}
          {/* <Form className="d-flex mx-auto" style={{ maxWidth: "30rem", flexGrow: 1 }}>
            <FormControl
              type="search"
              placeholder="Search for college, course or location..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="danger" style={{ marginLeft: "10px" }}>Search</Button>
          </Form> */}

          {/* Need Counselling Button */}
          <Nav className="ms-auto">
  <Nav.Link
    href="#counseling"
    className="btn"
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
      color: 'white',    // Set the color to white
      textDecoration: 'none',   // Remove any text decoration like underline on hover
    }}
  >
    <FaUserCircle size={30} style={{ color: 'white',marginLeft:"15px" }} />  {/* White icon color */}
  </Nav.Link>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
