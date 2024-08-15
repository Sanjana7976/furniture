import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Why() {
  return (
    <div className="bg-body-tertiary">
      <Container>
        <Row className="text-start">
          <Col className="p-4">
            <h1>Why Choose Us</h1>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <table className="table table-borderless table-light">
              <tr>
                <td>
                  <img src="./images/truck.svg" alt="" />
                  <h6>Fast & Free Shipping</h6>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </td>
                <td>
                  <img src="./images/bag.svg" alt="" />
                  <h6>Easy to Shop</h6>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="./images/support.svg" alt="" />
                  <h6>24/7 Support</h6>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </td>
                <td>
                  <img src="./images/return.svg" alt="" />
                  <h6>Hassle Free Returns</h6>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </td>
              </tr>
            </table>
          </Col>
          <Col className="pt-5">
            <div className="position-relative">
              <img src="./images/dots-yellow.svg" alt="" className="" />
              <div className="position-absolute top-50 end-0">
                <img
                  src="./images/why-choose-us-img.jpg"
                  alt=""
                  height={400}
                  width={420}
                  className="rounded rounded-4"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Why
