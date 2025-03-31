import Nav from "react-bootstrap/Nav";

const Navbar = ({ total=2000 }) => {
  const token = false;

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Nav.Item>
        <Nav.Link href="/home">🍕 Home</Nav.Link>
      </Nav.Item>

      {token ? (
        <>
          <Nav.Item>
            <Nav.Link eventKey="profile">🔓 Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="logout">🔒 Logout</Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link eventKey="login">🔐 Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">🔐 Register</Nav.Link>
          </Nav.Item>
        </>
      )}

      
      <Nav.Item className="ms-auto">
        <Nav.Link eventKey="total">🛒 Total: ${total.toLocaleString()}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
