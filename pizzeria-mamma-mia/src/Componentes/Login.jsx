import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  const [form, setForm] = useState({
    user: "",
    pass: ""    
  });
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const validate = () => {
    let newErrors = {};

    if (!form.user) newErrors.user = "No ha ingresado un usuario";
    if (!form.pass) newErrors.pass = "No ha ingresado una contraseña";

    // if (form.pass.length < 6) newErrors.pass = "Mínimo 6 caracteres";
    // if (form.pass !== form.confirmPass)
    //   newErrors.confirmPass = "Las contraseñas no coinciden";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {      
      console.log(form);
      alert("Usuario enviado a login");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <Form.Group className="mb-3" controlId="formBasicName">
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

      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default LoginForm;
