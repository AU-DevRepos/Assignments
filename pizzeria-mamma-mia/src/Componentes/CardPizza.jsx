import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </Card.Text>
        <Card.Text><strong>Precio:</strong> ${price.toLocaleString()}</Card.Text>
        <Button variant="primary" className="me-2">Ver más</Button>
        <Button variant="success">Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
