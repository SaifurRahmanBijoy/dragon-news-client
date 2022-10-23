import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Form className="shadow-sm p-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className="text-danger d-block">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form>
  );
};

export default Login;
