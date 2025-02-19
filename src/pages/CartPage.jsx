import { useCart } from "../context/CartContext";
import { Container, Table, Button } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-4">
      <h2 className="text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover className="text-center mt-3">
            <thead className="table-success">
              <tr>
                <th>Plant</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>➖</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>➕</Button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="text-end mt-4">Total: ${totalCost.toFixed(2)}</h3>
        </>
      )}
    </Container>
  );
};

export default CartPage;
