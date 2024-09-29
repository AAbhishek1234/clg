// import React from 'react';
// import { Carousel, Form, Button, FormControl } from 'react-bootstrap';
// import './Slider.css';

// const ImageSlider = () => {
//   return (
//     <Carousel>
//       {/* Slide 1 */}
//       <Carousel.Item>
//         <img style={{height:"32rem"}}
//           className="d-block w-100"
//           src="/Images/0x0.webp"
//           alt="First slide"
//         />
//         <div className="banner-form">
//           <h1>
//             Looking for the right college?<br />
//             Find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 2 */}
//       <Carousel.Item>
//         <img style={{height:"32rem"}}
//           className="d-block w-100"
//           src="/Images/photo-1.jpeg"
//           alt="Second slide"
//         />
//         <div className="banner-form">
//           <h1>
//             Looking for the right college?<br />
//             Find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>

//       {/* Slide 3 */}
//       <Carousel.Item>
//         <img style={{height:"32rem"}}
//           className="d-block w-100"
//           src="/Images/IIT-Roorkee-Campus-1024x768.jpeg"
//           alt="Third slide"
//         />
//         <div className="banner-form">
//           <h1>
//             Looking for the right college?<br />
//             Find the best college here!!
//           </h1>
//           {/* Search Form */}
//           <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem" }}>
//             <FormControl
//               type="search"
//               placeholder="Search for college, course or location..."
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="danger" style={{ marginLeft: "12px", width: "8rem" }}>Search</Button>
//           </Form>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default ImageSlider;








//////////////////---------Practice Code--------////////////



import React from 'react';
import { Carousel, Form, Button, FormControl } from 'react-bootstrap';
import './Slider.css';

const ImageSlider = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/0x0.webp"
          alt="First slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem",marginLeft:"7rem" }}>
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
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/cc.jpg"
          alt="Second slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem", marginLeft:"7rem" }}>
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
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/IIT-Roorkee-Campus-1024x768.jpeg"
          alt="Third slide"
        />
        <div className="banner-form">
          <h1>
            Looking for the right college?<br />
            Find the best college here!!
          </h1>
          {/* Search Form */}
          <Form className="d-flex" style={{ maxWidth: "30rem", width: '100%', height: "3rem",marginLeft:"7rem"  }}>
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
