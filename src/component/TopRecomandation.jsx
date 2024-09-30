import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import styles from'./TopRec.module.css'
const ImageSlider = () => {
  const images = [
    {
      src: '/Images/university.jpg',
      alt: 'College 1',
      caption: 'Sagar Group of Institutions'
    },
    {
      src: '/Images/pixel.jpeg',
      alt: 'College 2',
      caption: 'Chandigarh University'
    },
    {
      src: '/Images/university.jpg',
      alt: 'College 3',
      caption: 'GLA University'
    },
    {
      src: '/Images/uni3.avif',
      alt: 'College 4',
      caption: 'Lovely Professional University'
    },
    {
      src: '/Images/pexel2.jpeg',
      alt: 'College 5',
      caption: 'Parul University'
    }
  ];

  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4" style={{fontWeight:"bold",fontSize:"40px"}}>Top Colleges Recommended For You</h2>
      <Carousel fade interval={3000} indicators={false} controls>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"  style={{height:"25rem",borderRadius:"20px",width:"20rem"}}
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImageSlider;
