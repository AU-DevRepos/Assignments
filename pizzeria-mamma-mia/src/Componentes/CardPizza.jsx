import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";


export const CardPizza = () => {
  // const [Pizzas, setPizzas] = useState([]);

  const { cart, increaseQuantity, decreaseQuantity, getTotal } = useCart();

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas", error);
      }
    };

    getApi();
  }, []);

  return (
    <Container className="my-4">
      <Row className="g-4">
        {cart.map((pizza) => (
          <Col key={pizza.id} md={4} sm={6}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
                <Card.Text>
                  <strong>Ingredientes:</strong>
                  <ul className="mb-0">
                    {pizza.ingredients?.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Precio:</strong> ${pizza.price.toLocaleString()} CLP
                </Card.Text>
                <div className="m-4">
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
