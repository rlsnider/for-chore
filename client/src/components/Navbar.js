import {Nav, Navbar, NavDropdown, Container, Form, Button} from 'react-bootstrap'

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="Logo">ForChore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="logo">
          <Nav
            className="nav"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#chores">Daily Chores</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#login">Log In</NavDropdown.Item>
              <NavDropdown.Item href="#sign-up">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
