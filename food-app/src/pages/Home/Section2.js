import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our recipes are crafted with originality in every bite. We don’t just make burgers – we create bold, one-of-a-kind flavors that set us apart from the rest.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Only the freshest ingredients make it to your plate. From crisp veggies to premium patties, our commitment to quality is what makes every burger unforgettable.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Craving satisfaction in minutes? We’ve got you. Our lightning-fast delivery ensures your food is hot, fresh, and right on time – every time.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              Nothing brings people together like great food. Whether it's a weekend dinner or a quick catch-up, our burgers turn mealtime into moments of joy. Made with care and packed with flavor, they’re best enjoyed with the ones you love.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
