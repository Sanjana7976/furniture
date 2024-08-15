import React from 'react'

import Design from './Design'
import Craft from './Craft'
import Testimonials from './Testimonials'
import Why from './Why'
import Interior from './Interior'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <Design/>
      <Craft/>
      <Why/>
      <Interior/>
      <Testimonials/>
      
      <Container>
        <div className='d-flex justify-content-bottom mt-5'>
          <h1> Recent Blog</h1>
          <a href='#' className='text-dark text-decpration-underline text-end'> View All Posts</a>
        </div>
      <Row className='py-5'>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0 bg-light'>
      <Card.Img variant="top" src="./images/post-1.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0 bg-light'>
      <Card.Img variant="top" src="./images/post-2.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0 bg-light'>
      <Card.Img variant="top" src="./images/post-3.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>Small Space Furniture Apartment Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 12, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  </Row>
      </Container>
    </div>
  )
}

export default Home
