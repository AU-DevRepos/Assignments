import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotal } = useCart();

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
                className="img-fluid rounded-start m-2"
              />
            </Col>

            <Col md={6}>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Row>
                  <Col>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <Card.Text>${pizza.price.toLocaleString()} CLP</Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Ingredientes:</Card.Title>
                    <ul>
                      {pizza.ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
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
