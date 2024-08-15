import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Product from './Product';

function Shop() {
  return (
    <div>
      <Container fluid>
        <Row className='bg-success p-3 text-start text-white'>
          <Col className='ps-5 m-5'>
            <h1 className='fw-bold w-75 mt-5'> Shop </h1>
          </Col>
          <Col>
                    
          </Col>
        </Row>
      </Container>
      <Product/>
    </div>
  )
}

export default Shop
