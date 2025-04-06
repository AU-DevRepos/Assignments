import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
// import Cart from "./Componentes/Cart";
import { pizzaCart } from "./assets/js/pizzas";
import { CardPizza } from "./Componentes/CardPizza";
import Home from "./Componentes/Home";
import RegisterForm from "./Componentes/Register";
import LoginForm from "./Componentes/Login";
import Cart from "./Componentes/Cart";
import NotFound from "./Componentes/NotFound";
import { Profile } from "./Componentes/Profile";

function App() {
  const [cart, setCart] = useState(pizzaCart);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar total={getTotal()} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/CardPizza" element={<CardPizza />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <pizzaCart />
      <RegisterForm />
      <CardPizza />
      <Home />
      <Cart cart={cart} setCart={setCart} />
      <RegisterForm />
      <LoginForm />
      <Myapp /> */}
      <Footer />
    </div>
  );
}

export default App;
