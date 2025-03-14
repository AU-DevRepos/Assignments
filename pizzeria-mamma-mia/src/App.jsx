import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
import RegisterForm from "./Componentes/Register";
import LoginForm from "./Componentes/Login";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}

      <RegisterForm />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
