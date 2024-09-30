import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Testimonial.css'; // Import custom CSS

const testimonials = [
  {
    quote: " The entire process was well-managed and smooth. The team was friendly and extremely responsive to all my queries.",
    name: "Santhosh",
    role: "Student"
  },
  {
    quote: "Fantastic support! The staff was patient, knowledgeable, and always available to help. I couldn't have asked for better service.",
    name: "Sahana",
    role: "Student"
  },
  {
    quote: "I am truly grateful for the guidance provided. The team went above and beyond to ensure I got exactly what I needed.",
    name: "Payal",
    role: "Student"
  },
  {
    quote: "I was impressed with the prompt responses and personalized attention I received. Thank you for making the experience so smooth!",
    name: "Amit",
    role: "Student"
  },
  {
    quote: "Absolutely delighted with the support I received. The professionalism and dedication of the staff are commendable.",
    name: "Vikram",
    role: "Student"
  },
  {
    quote: "Great experience! The staff was very attentive and provided excellent advice, which made a huge difference for me.",
    name: "Divya",
    role: "Student"
  }
];

const TestimonialCarousel = () => {
  return (
    <Container fluid className="testimonial-container">
      <Row>
        <Col>
          <h2 className="text-center mb-4" style={{fontWeight:"bold"}}>Student's Feedback</h2>
        </Col>
      </Row>
      <Carousel indicators={false} interval={3000} className="testimonial-carousel">
        {/* Create two slides with 3 cards each for a total of 6 cards */}
        {[0, 3].map((startIdx) => (
          <Carousel.Item key={startIdx}>
            <Row>
              {testimonials.slice(startIdx, startIdx + 3).map((testimonial, idx) => (
                <Col lg={4} md={6} sm={12} className="mb-4" key={idx}>
                  <Card className="p-3 testimonial-card">
                    <Card.Body>
                      <blockquote className="blockquote mb-4">
                        <p>{testimonial.quote}</p>
                      </blockquote>
                      <Card.Footer>
                        <h5>{testimonial.name}</h5>
                        <small>{testimonial.role}</small>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialCarousel;
