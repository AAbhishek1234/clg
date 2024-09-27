// import React from 'react';
// import { Carousel, Form, Button, FormControl } from 'react-bootstrap';

// const ImageSlider = () => {
//   return (
//     <Carousel>
//       {/* Slide 1 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider3.jpeg"
//           alt="First slide"
//         />
//         <h1 style={{ 
//           position: 'absolute', 
//           color:"black",
//           top: '17%', 
//           left: '50%', 
//           transform: 'translate(-50%, -50%)', 
//           zIndex: 10,
//           fontSize:'50px',
//           fontWeight:"bold",
//           //backgroundColor: 'rgba(255, 255, 255, 0.5)', // semi-transparent background
//           padding: '10px',
//           borderRadius: '5px'
//         }}>
//           Welcome to find college with right choice
//         </h1>
//         {/* Search Form */}
//         <div className="d-flex justify-content-center" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', zIndex: 10 }}>
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 2 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider2.jpeg"
//           alt="Second slide"
//         />
//         <h1 style={{ 
//           position: 'absolute', 
//           top: '17%', 
//           left: '50%', 
//           transform: 'translate(-50%, -50%)', 
//           zIndex: 10,
//           //backgroundColor: 'rgba(255, 255, 255, 0.5)', 
//           padding: '10px',
//           fontWeight:"bold",
//           fontSize:'50px',
//           borderRadius: '5px'
//         }}>
//           Welcome to find college with right choice
//         </h1>
//         {/* Search Form */}
//         <div className="d-flex justify-content-center" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', zIndex: 10 }}>
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%' ,height:"3rem"}}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width:"8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 3 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider1.jpeg"
//           alt="Third slide"
//         />
//         <h1 style={{ 
//           position: 'absolute', 
//           top: '17%', 
//           left: '50%', 
//           transform: 'translate(-50%, -50%)', 
//           zIndex: 10,
//           fontWeight:"bold",
//           //backgroundColor: 'rgba(255, 255, 255, 0.5)', 
//           padding: '10px',
//           borderRadius: '5px',
//           fontSize:'50px'
//         }}>
//           Welcome to find college with right choice
//         </h1>
//         {/* Search Form */}
//         <div className="d-flex justify-content-center" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', zIndex: 10 }}>
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default ImageSlider;







// import React from 'react';
// import { Carousel, Form, Button, FormControl, Col, Row } from 'react-bootstrap';
// import './Slider.css'
// const ImageSlider = () => {
//   return (
//     <Carousel>
//       {/* Slide 1 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider3.jpeg"
//           alt="First slide"
//         />
//         <div className="d-flex flex-column align-items-center" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, textAlign: 'center' }}>
//           <h1 style={{ 
//             color: "White", 
//             fontSize: '50px', 
//             fontWeight: "bold",
//             padding: '12px',
//             borderRadius: '5px',
//             marginTop:"10rem"
//           }}>
//            Looking for the right college?<br/>
//            find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 2 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider2.jpeg"
//           alt="Second slide"
//         />
//         <div className="d-flex flex-column align-items-center" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, textAlign: 'center' }}>
//           <h1 style={{ 
//             color: "white", 
//             fontSize: '50px', 
//             fontWeight: "bold",
//             padding: '12px',
//             borderRadius: '5px',
//              marginTop:"10rem"
//           }}>
//            Looking for the right college?<br/>
//            find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 3 */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/Images/slider1.jpeg"
//           alt="Third slide"
//         />
//         <div className="d-flex flex-column align-items-center" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, textAlign: 'center' }}>
//           <h1 style={{ 
//             color: "white", 
//             fontSize: '50px', 
//             fontWeight: "bold",
//             padding: '12px',
//             borderRadius: '5px',
//              marginTop:"10rem"
//           }}>
//            Looking for the right college?<br/>
//            find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "10px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default ImageSlider;










import React from 'react';
import { Carousel, Form, Button, FormControl } from 'react-bootstrap';
import './Slider.css';

const ImageSlider = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/slider3.jpeg"
          alt="First slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
            <FormControl
              type="search"
              placeholder="Search for college, course or location..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
          </Form>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/slider2.jpeg"
          alt="Second slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
            <FormControl
              type="search"
              placeholder="Search for college, course or location..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
          </Form>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/slider1.jpeg"
          alt="Third slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
            <FormControl
              type="search"
              placeholder="Search for college, course or location..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
          </Form>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
