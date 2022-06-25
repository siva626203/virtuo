import react, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap'
function Header(){
    return(
        <Fragment>
          
<Navbar collapseOnSelect expand="lg" bg="info" variant="light">
  <Container>
  <Navbar.Brand href="/">Virtuo Technology</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" variant='pills'>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
 
  </Navbar.Collapse>
  </Container>
</Navbar>

        </Fragment>
    );
}
export default Header;