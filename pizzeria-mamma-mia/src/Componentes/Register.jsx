import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterForm = () => {
  const [form, setForm] = useState({
    user: "",
    pass: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({});

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validar el formulario
  const validate = () => {
    let newErrors = {};

    if (!form.user) newErrors.name = "El usuario es obligatorio";
    if (form.pass.length < 6) newErrors.pass = "Mínimo 6 caracteres";
    if (form.pass !== form.confirmPass)
      newErrors.confirmPass = "Las contraseñas no coinciden";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {      
      console.log(form);
      alert("formulario correcto")
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Usuario */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          name="user"
          value={form.user}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.user}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Contraseña */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
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

      {/* Confirmar Contraseña */}
      <Form.Group className="mb-3" controlId="formConfirmPassword">
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

      {/* Botón de envío */}
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;
