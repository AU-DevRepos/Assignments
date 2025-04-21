import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSession } from "../context/SessionContext";

const Navbar = () => {
  const { session } = useSession();
  const { getTotal } = useCart();

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
      {session?.Token ? (
        <>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile" className="ms-3">
              🔓 Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/logout" className="ms-3">
              🔒 Logout
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link as={Link} to="/login" className="ms-3">
              🔐 Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/register" className="ms-3">
              📝 Register
            </Nav.Link>
          </Nav.Item>
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
