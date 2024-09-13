import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { PiUserCircleLight } from "react-icons/pi";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Image
          src="https://s3.rdbuz.com/Images/rdc/rdc-redbus-logo.svg"
          thumbnail
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Bus Tickets</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<PiUserCircleLight style={{ fontSize: "40px" }} />}
              id="collapsible-nav-dropdown"
            >
              {localStorage.getItem("token") ? (
                <NavDropdown.Item>
                  <div>{localStorage.getItem("token").split(",")[0]}</div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/");
                    }}
                  >
                    Sign Out
                  </Button>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
