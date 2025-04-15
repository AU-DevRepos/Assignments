import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const token = false;
  const { getTotal } = useCart();
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Nav.Item>
        <Link to="/home" className="text-decoration-none ms-3">
          Home
        </Link>
        {/* <Nav.Link href="/home">🍕 Home</Nav.Link> */}
      </Nav.Item>
      <Nav.Item>
        <Link to="/Profile" className="text-decoration-none ms-3">
          🔓 Profile
        </Link>
        {/* <Nav.Link eventKey="profile">🔓 Profile</Nav.Link> */}
      </Nav.Item>
      <Nav.Item>
        <Link to="/Cart" className="text-decoration-none ms-3">
          Cart
        </Link>
        {/* <Nav.Link eventKey="profile">🔓 Profile</Nav.Link> */}
      </Nav.Item>
      <Nav.Item>
        <Link to="/404”" className="text-decoration-none ms-3">
          404”
        </Link>
        {/* <Nav.Link eventKey="profile">🔓 Profile</Nav.Link> */}
      </Nav.Item>
      {token ? (
        <>
          <Nav.Item>
            <Link to="/Profile" className="text-decoration-none ms-3">
              🔓 Profile
            </Link>
            {/* <Nav.Link eventKey="profile">🔓 Profile</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Link to="/Logout" className="text-decoration-none ms-3">
              🔒 Logout
            </Link>
            {/* <Nav.Link eventKey="logout">🔒 Logout</Nav.Link> */}
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Link to="/Login" className="text-decoration-none ms-3">
              🔒 login
            </Link>
            {/* <Nav.Link eventKey="login">🔐 Login</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Link to="/Register" className="text-decoration-none ms-3">
              🔐 Register
            </Link>
            {/* <Nav.Link eventKey="register">🔐 Register</Nav.Link> */}
          </Nav.Item>
        </>
      )}

      <Nav.Item className="ms-auto">
        <Nav.Link as={Link} to="/cart" eventKey="total">
          <button>🛒 Total: ${getTotal().toLocaleString()}</button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
