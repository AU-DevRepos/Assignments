import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSession } from "../context/SessionContext";

const Navbar = () => {
  const { email, logout } = useSession();
  const { getTotal } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      {/* Links principales */}
      <Nav.Item>
        <Nav.Link as={Link} to="/home" className="ms-3">
          🍕 Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/cart" className="ms-3">
          🛒 Carrito
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/404" className="ms-3">
          ❌ Página 404
        </Nav.Link>
      </Nav.Item>

      {/* Links según sesión */}
      {email ? (
        <>
          <Nav.Link as={Link} to="/profile">👤 {email}</Nav.Link>
          <Nav.Link as="button" onClick={logout}>🔒 Cerrar sesión</Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
          <Nav.Link as={Link} to="/register">📝 Register</Nav.Link>
        </>
      )}

      {/* Total del carrito */}
      <Nav.Item className="ms-auto">
        <Nav.Link as={Link} to="/cart" eventKey="total">
          <span className="fw-bold">
            🛒 Total: ${getTotal().toLocaleString()} CLP
          </span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
