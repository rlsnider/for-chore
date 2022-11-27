import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topbar() {
  return (
    <Navbar id="navbar" bg="light" expand="lg">
      <Container id= "container">
        <Navbar.Brand href="./images/Chore.jpg">
        {/* <img
          src={logo}
          width="30"
          height="30"
         /> */}
        For Chore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link className="chores" href="#chores">Daily Chores</Nav.Link>
            <Nav.Link className="about" href="#about">About</Nav.Link>
            <Nav.Link className="achievements" href="#achievements">Achievements</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              {/* Login page/form */}
              <NavDropdown.Item href="#login">Login</NavDropdown.Item>
              {/* Sign up page */}
              <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;