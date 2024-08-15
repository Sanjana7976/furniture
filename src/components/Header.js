import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header()
{
  const [cart,setCart] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        setCart(res2)
      })
    })
  })
    return(
      <>
       
        <Navbar bg="success" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" className='name fw-bold'> <h2>Furni.</h2> </Navbar.Brand>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Shop">Shop</Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>
              <Nav.Link href="/Service">Services</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
              <Nav.Link href="/User"><i className="fa-regular fa-user"></i></Nav.Link>
              <Nav.Link href="/Cart"><i className="fa-solid fa-cart-shopping"></i><sup>{cart.length}</sup></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          
        
      </>
    )
}

export default Header