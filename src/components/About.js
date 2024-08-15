import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import Testimonials from "./Testimonials";
import Why from "./Why";

function About() {
  return (
    <div>
      <Container fluid>
        <Row className="bg-success p-3 text-start text-white">
          <Col className="ps-5 m-5">
            <h1 className="fw-bold w-75 mt-5"> About Us </h1>
            <p className="fs-6 mt-4 mb-4 w-3">
              {" "}
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <Button variant="warning rounded-pill fw-bold w-25 mt-4 p-3">
              {" "}
              Shop Now
            </Button>
            <Button variant="outline-light rounded-pill fw-bold p-3 w-25 mt-4 mx-4">
              {" "}
              Explore{" "}
            </Button>
          </Col>
          <Col>
            <img
              src="./images/couch.png"
              alt=""
              className="img-fluid w-100 mx-auto d-block"
            ></img>
          </Col>
        </Row>
      </Container>
      <Why/>
      <Container>
<Row className='mt-4 mb-4'>
  <h1 className='text-center'>Our Team</h1>
  <Col>
  <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_1.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
          <h4><u>Lawson Arnold</u></h4>
          <p className='text-secondary'>CEO, Founder, Atty</p>
          </Card.Title>
        <Card.Text>
          <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_2.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
          <h4><u>Lawson Arnold</u></h4>
          <p className='text-secondary'>CEO, Founder, Atty</p>
          </Card.Title>
        <Card.Text>
          <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_3.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
          <h4><u>Lawson Arnold</u></h4>
          <p className='text-secondary'>CEO, Founder, Atty</p>
          </Card.Title>
        <Card.Text>
          <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_4.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
          <h4><u>Lawson Arnold</u></h4>
          <p className='text-secondary'>CEO, Founder, Atty</p>
          </Card.Title>
        <Card.Text>
          <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
      <Testimonials/>
    </div>
  );
}

export default About;
