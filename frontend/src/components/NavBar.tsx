import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" fixed="top" expand="md" className="fixed-top rounded" style={{ position: 'sticky', borderBottom: '20px', padding: '10px' }}>
      <Container>
        <Navbar.Brand href="/"><img src="src/assets/profile.jpg" alt="WSG Lobeda Tischtennis" width="100" height="100" className="d-none d-md-block align-top rounded-circle" style={{  border: '3px solid #87CEFA', borderRadius: '1px', backgroundColor: '#FFFFFF' }}/><span className="d-block d-lg-none">WSG Lobeda Tischtennis</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ fontSize: '25px' }} href="/">Home</Nav.Link>
            <NavDropdown title="Mannschaften" style={{ fontSize: '25px' }} id="basic-nav-dropdown">
              <NavDropdown.Item  style={{ fontSize: '25px' }} href="/page1">Übersicht</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item style={{ fontSize: '25px' }} href="/page2">1. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '25px' }} href="/page3">2. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '25px' }} href="/page4">3. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '25px' }} href="/page5">4. Mannschaft</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '25px' }} href="/page6">5. Mannschaft</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ fontSize: '25px' }} href="/informationen">Informationen</Nav.Link>
            <Nav.Link  style={{ fontSize: '25px' }} href="/vereinsleben">Vereinsleben</Nav.Link>
            <Nav.Link style={{ fontSize: '25px' }} href="/chronik">Chronik</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;