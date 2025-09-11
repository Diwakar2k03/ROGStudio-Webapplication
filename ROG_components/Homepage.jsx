import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import stdph from "../assets/stdph.png"

function Homepage() {
  return (
    <div>
      <div className='heading'>

        <h1 className='title'>ROG STUDIO</h1>
        <div className='svg' ><PhotoCameraIcon /></div>
        
      </div>
      
      <div className='Navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Photo"}>Photography</NavDropdown.Item>
             
              <NavDropdown.Item as={Link} to={"/Photo"}>
                Videography
              </NavDropdown.Item>
              
        
              
              
              
            </NavDropdown>
            <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'/teammembers'}>About Us</Nav.Link>
             <Nav.Link as={Link} to={'/Booking'}>Booking</Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div className='homephoto'>
        <img src={stdph}></img>
      </div>
      <div className='lines'>
      <h1> Capture your best moments</h1>
</div>
    </div>
  )
}

export default Homepage