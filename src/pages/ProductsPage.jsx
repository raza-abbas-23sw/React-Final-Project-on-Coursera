import { useCart } from "../context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 12,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 8,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
  {
    id: 5,
    name: "Money Tree",
    price: 20,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    price: 25,
    image: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/14071/snake-plant.jpg",
  },
];

const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Our Houseplants</h2>
      <Row>
        {products.map((plant) => (
          <Col key={plant.id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={plant.image} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body className="text-center">
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>${plant.price}</Card.Text>
                <Button onClick={() => addToCart(plant)} variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
