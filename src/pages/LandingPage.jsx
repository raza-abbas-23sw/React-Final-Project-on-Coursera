import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const LandingPage = () => {
  const backgroundImage = "https://wallpapers.com/images/high/1080p-nature-background-nfkrrkh7da3eonyn.webp";

  return (
    <Container
      fluid
      className="text-center d-flex flex-column align-items-center justify-content-center vh-100 text-white"
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`,
        height: "100vh",
      }}
    >
      <h1 className="display-4 fw-bold bg-dark p-2 rounded">Welcome to Paradise Nursery</h1>
      <p className="lead bg-dark p-2 rounded">Your one-stop shop for beautiful houseplants.</p>
      <Button as={Link} to="/products" variant="light" size="lg">Get Started</Button>
    </Container>
  );
};

export default LandingPage;
