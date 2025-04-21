import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSession } from "../context/SessionContext";



const RegisterForm = () => {


  const { login } = useSession();
  
  const [form, setForm] = useState({
    user: "",
    pass: "",
    confirmPass: "",
    token:true
  });
  const [errors, setErrors] = useState({});

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validar el formulario
  const validate = () => {
    let newErrors = {};

    if (!form.user) newErrors.user = "El usuario es obligatorio";
    if (form.pass.length < 6) newErrors.pass = "Mínimo 6 caracteres";
    if (form.pass !== form.confirmPass)
      newErrors.confirmPass = "Las contraseñas no coinciden";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     register(form); 
  //     console.log("Registro:", form);      
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {      
      const newUser = {
        user: form.user,
        pass: form.pass,
        Token: true
      };  
      login(newUser);
      console.log("Registro:", newUser);      
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Container
        className="col-4 mt-4"

      >
        <Form.Group className="mb-3 " >
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

        <Form.Group className="mb-3 " >
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

        <Form.Group className="mb-3 " >
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
      {/* Botón de envío */}
    </Form>
  );
};

export default RegisterForm;
