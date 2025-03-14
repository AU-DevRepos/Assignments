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

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const validate = () => {
    let newErrors = {};

    if (!form.user) newErrors.name = "El usuario es obligatorio";
    if (form.pass.length < 6) newErrors.pass = "Mínimo 6 caracteres";
    if (form.pass !== form.confirmPass)
      newErrors.confirmPass = "Las contraseñas no coinciden";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {      
      console.log(form);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      
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
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          name="pass"
          value={form.pass}
          onChange={handleChange}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.pass}
        </Form.Control.Feedback>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;
