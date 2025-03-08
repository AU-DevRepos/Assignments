import Header from "./Header";
import CardPizza from "./CardPizza";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4 d-flex flex-wrap justify-content-center">
        <CardPizza 
          name="Napolitana" 
          price={5950} 
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="pizzeria-mamma-mia/src/assets/img/cupon-1.jpg"
        />
        <CardPizza 
          name="Española" 
          price={6950} 
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="pizzeria-mamma-mia/src/assets/img/cupon-2.jpg"
        />
        <CardPizza 
          name="Pepperoni" 
          price={6950} 
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="pizzeria-mamma-mia/src/assets/img/cupon-3.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
