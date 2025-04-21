import { useState } from "react";
import { useSession } from "../context/SessionContext"; // Importante
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoginForm = () => {
  const { login } = useSession(); // ← Usa el método del contexto

  const [form, setForm] = useState({
    user: "",
    pass: "",
    Token: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.user) newErrors.user = "No ha ingresado un usuario";
    if (!form.pass) newErrors.pass = "No ha ingresado una contraseña";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {      
      const sessionData = {
        user: form.user,
        pass: form.pass,
        Token: true
      };  
      login(sessionData);
      console.log("Login:", sessionData);
      console.log("Usuario enviado");
    }
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <div className="container p-4 align-center col-md-4">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                name="user"
                value={form.user}
                onChange={handleChange}
                isInvalid={!!errors.user}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="pass"
                value={form.pass}
                onChange={handleChange}
                isInvalid={!!errors.pass}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pass}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
