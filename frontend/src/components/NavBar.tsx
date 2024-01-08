import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src="src/assets/profile.jpg" alt="" width="100" height="100" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Mannschaften" id="basic-nav-dropdown">
              <NavDropdown.Item href="/page1">Übersicht</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/page2">1. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item href="/page3">2. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item href="/page4">3. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item href="/page5">4. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item href="/page6">5. Mannschaft</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/informationen">Informationen</Nav.Link>
            <Nav.Link href="/vereinsleben">Vereinsleben</Nav.Link>
            <Nav.Link href="/chronik">Chronik</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;