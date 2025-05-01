import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSession } from "../context/SessionContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useSession();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    user: "",
    pass: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.user) newErrors.user = "El usuario es obligatorio";
    if (form.pass.length < 6) newErrors.pass = "Mínimo 6 caracteres";
    if (form.pass !== form.confirmPass)
      newErrors.confirmPass = "Las contraseñas no coinciden";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const success = await register(form.user, form.pass);
      if (success) {
        console.log("Registro exitoso");
        navigate("/profile");
      } else {
        console.log("Error al registrar");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="col-4 mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            name="user"
            value={form.user}
            onChange={handleChange}
            isInvalid={!!errors.user}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme su contraseña"
            name="confirmPass"
            value={form.confirmPass}
            onChange={handleChange}
            isInvalid={!!errors.confirmPass}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPass}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Container>
    </Form>
  );
};

export default RegisterForm;
