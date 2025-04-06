import { pizzaCart } from "../assets/js/pizzas";
import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Cart = ({ cart, setCart }) => {
  //   const [cart, setCart] = useState(pizzaCart);{ cart, setCart }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.reduce((acc, item) => {
      if (item.id === id) {
        if (item.count > 1) {
          acc.push({ ...item, count: item.count - 1 });
        } else if (item.count === 1) {
          if (confirm(`¿Seguro deseas eliminar ${item.name} del carrito?`)) {
            return acc;
          } else {
            acc.push(item);
          }
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <Container>
      <h1 className="my-4 text-center">🛒 Carrito de Compras</h1>

      {cart.map((pizza) => (
        <Card key={pizza.id} className="mb-3 shadow-sm">
          <Row className="align-items-center g-0">
            <Col md={3}>
              <Card.Img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid rounded-start"
              />
            </Col>

            <Col md={6}>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>${pizza.price.toLocaleString()} CLP</Card.Text>
              </Card.Body>
            </Col>

            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <Button
                variant="danger"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                ➖
              </Button>
              <span className="mx-3 fw-bold">{pizza.count}</span>
              <Button
                variant="success"
                onClick={() => increaseQuantity(pizza.id)}
              >
                ➕
              </Button>
            </Col>
          </Row>
        </Card>
      ))}


      <div className="text-end mt-4">
        <h3>Total: ${getTotal().toLocaleString()} CLP</h3>
        <Button variant="primary" size="lg" className="mt-3">
          Finalizar Compra 🛍️
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
