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
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media"
        />
        <CardPizza 
          name="Española" 
          price={6950} 
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media"
        />
        <CardPizza 
          name="Pepperoni" 
          price={6950} 
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media"
        />
      </div>
    </div>
  );
};

export default Home;
