import Header from "./Header";
import { CardPizza } from "./CardPizza";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Header />
      <CardPizza />
    </Container>
  );
};

export default Home;
