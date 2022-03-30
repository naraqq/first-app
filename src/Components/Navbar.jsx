import React from 'react';
import {Navbar, Container} from 'react-bootstrap'

function MyNavbar() {
    return ( 
        
    <Navbar id='myNavbar' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">

          <span className='head_brand_text'>Random Joke!</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
     );
}

export default MyNavbar;