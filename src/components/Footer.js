import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <div>
        <div className='position-relative mt-5 text-start p-4'>
            <div className='position-absolute top-0 end-0 translate-middle'>
                <img src='./images/sofa.png' alt='' height={300} width={300} />
            </div>
            <h3 className='m-3'><i className="fa-regular fa-envelope text-secondary "></i> Subscribe to Newsletter</h3>
            <Form className='m-3'>
                <Row >
                    <Col md={2}>
                        <Form.Control placeholder="Enter your name" />
                    </Col>
                    <Col md={2}>
                        <Form.Control placeholder="Enter your email" />
                    </Col>
                    <Col>
                        <Button variant="success" className='px-4'><i className="fa-brands fa-telegram fs-4"></i></Button>
                    </Col>
                </Row>
            </Form>
        </div>
        <Container className='text-start'>
            <a href='#' className='text-dark text-decoration-none'><h1>Furni.</h1></a>
            <Row>
                <Col md={4}>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                    <div className='d-flex gap-3'>
                        <div className='p-2 rounded-circle bg-light px-3'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='p-2 rounded-circle bg-light px-3'>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className='p-2 rounded-circle bg-light px-3'>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className='p-2 rounded-circle bg-light px-3'>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <ul className='list-unstyled'>
                        <li><a href='#'>About us</a></li>
                        <li className='mt-2'><a href='#'>Services</a></li>
                        <li className='mt-2'><a href='#'>Blog</a></li>
                        <li className='mt-2'><a href='#'>Contact us</a></li>
                    </ul>
                </Col>
                <Col md={2}>
                    <ul className='list-unstyled'>
                        <li><a href='#'>Support</a></li>
                        <li className='mt-2'><a href='#'>Knowledge Base</a></li>
                        <li className='mt-2'><a href='#'>Live chat</a></li>
                    
                    </ul>
                </Col>
                <Col md={2}>
                    <ul className='list-unstyled'>
                        <li><a href='#'>Jobs</a></li>
                        <li className='mt-2'><a href='#'>Our Team</a></li>
                        <li className='mt-2'><a href='#'>Leadership</a></li>
                        <li className='mt-2'><a href='#'>Privacy Policy</a></li>
                    </ul>
                </Col>
                <Col md={2}>
                    <ul className='list-unstyled'>
                        <li><a href='#'>Nordiac Chair</a></li>
                        <li className='mt-2'><a href='#'>Kruzo aero chair</a></li>
                        <li className='mt-2'><a href='#'>Ergonomic Chair</a></li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            <div className='d-flex'>
                <div className='p-2 flex-grow-1'>
                    <ul className='list-unstyled'>
                        <li>Copyright &copy; 2024. All Rights Reserved. — Designed with love by Untree.co</li>
                        <li>Created by Sanjana Pardeshi</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <a href='#'>Terms & Conditions</a>
                </div>
                <div className='p-2'>
                    <a href='#'>Privacy Policy</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer