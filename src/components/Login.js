import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';

function Login() {
  return (
    <div className='login'>
      <Form className='loginForm'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Usuario</Form.Label>
          <Form.Control type='email' placeholder='Enter user' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button
          className='submitBtn'
          type='submit'
          variant='contained'
          color='primary'
        >
          INGRESAR
        </Button>
      </Form>
    </div>
  );
}

export default Login;
