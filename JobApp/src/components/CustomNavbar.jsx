import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar
      sticky="top"
      style={{ backgroundColor: "#74A57F", marginBottom: "50px" }}
    >
      <Container className="pippo">
        <div>
            <Navbar.Brand style={{color:"#074F57", fontSize:"25px", fontWeight:"bold"}}>Jobs On Hunt</Navbar.Brand>
        </div>
        <div>
          <Nav className="me-5 gap-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/favourites" className="nav-link">
              Favourites
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
