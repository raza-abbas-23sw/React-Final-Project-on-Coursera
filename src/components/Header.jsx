import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Paradise Nursery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              🛒 Cart <Badge bg="light" text="dark">{totalItems}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
