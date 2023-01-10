import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Forms" id="basic-nav-dropdown">
        <NavDropdown.Item href="/form">Form</NavDropdown.Item>
        <NavDropdown.Item href="/form2">Form2</NavDropdown.Item>
        <NavDropdown.Item href="/form3">Form3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Get Requests" id="basic-nav-dropdown">
        <Nav.Link href="/anime">Anime</Nav.Link>
        <Nav.Link href="/beer">Beer</Nav.Link>
        <Nav.Link href="/Crypto">Crypto</Nav.Link>
        <Nav.Link href="/Cocktails">Cocktails</Nav.Link>
        <Nav.Link href="/HarryPotter">Harry Potter</Nav.Link>
      </NavDropdown>
    </Nav>
  )
}

export default NavBar