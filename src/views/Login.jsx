import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './LogReg.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form className={s.form} onSubmit={onFormSubmit}>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label htmlFor="inputPassword6">Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={onInputChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            placeholder="Enter email"
            id="inputPassword6"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={onInputChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button className="m-3" type="submit" variant="dark">
          LogIn
        </Button>
      </form>
    </div>
  );
}
