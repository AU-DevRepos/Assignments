import { useState } from "react";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Cart from "./Componentes/Cart";
import { pizzaCart } from "./assets/js/pizzas";

function App() {
  const [cart, setCart] = useState(pizzaCart);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div>
      <Navbar total={getTotal()} />
      {/* <Home /> */}
      <Cart cart={cart} setCart={setCart} />
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      <Footer />
    </div>
  );
}

export default App;
