import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Craft() {
  return (
    <div>
        <Container>
            <div className='d-flex align-items-center justify-content-evenly'>
                <div className='p-2 text-start'>
                    <h1>Crafted with excellent material</h1>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <Button variant="dark" className='rounded-pill px-4 fs-5'>Explore</Button>
                </div>
                <div className='p-2'>
                      <Card style={{ width: '16rem' }} className='border-0'>
                          <Card.Img variant="top" src='./images/Product-1.png' />
                          <Card.Body>
                              <Card.Title>Nordiac Chair</Card.Title>
                              <Card.Text>
                                  <h4>$ 50.00</h4>
                              </Card.Text>
                              <Button variant="dark" className='btn1 rounded-circle w-25 fs-3 '>+</Button>
                          </Card.Body>
                      </Card>
                </div>
                <div className='p-2'>
                <Card style={{ width: '16rem' }} className='border-0'>
                          <Card.Img variant="top" src='./images/Product-2.png' />
                          <Card.Body>
                              <Card.Title>Kruzo Aero Chair</Card.Title>
                              <Card.Text>
                                  <h4>$ 78.00</h4>
                              </Card.Text>
                              <Button variant="dark" className='btn1 rounded-circle w-25 fs-3 '>+</Button>
                          </Card.Body>
                      </Card>
                </div>
                <div className='p-2'>
                    <Card style={{ width: '16rem' }} className='border-0'>
                        <Card.Img variant="top" src='./images/Product-1.png' />
                        <Card.Body>
                            <Card.Title>Ergonomic Chair</Card.Title>
                            <Card.Text>
                                <h4>$ 43.00</h4>
                            </Card.Text>
                            <Button variant="dark" className='btn1 rounded-circle w-25 fs-3 '>+</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Craft