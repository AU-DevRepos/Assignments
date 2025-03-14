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
      <div className="container mt-5 align-self-center">
        <RegisterForm/>
      </div>
      <div className="container m-5">
        <LoginForm/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
