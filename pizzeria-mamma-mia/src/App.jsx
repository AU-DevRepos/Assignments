import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
import RegisterForm from "./Componentes/Register";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <div className="container">
        <RegisterForm/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
