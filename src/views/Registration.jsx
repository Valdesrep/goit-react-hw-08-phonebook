import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authOperation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './LogReg.module.css';
import Notiflix from 'notiflix';

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      Notiflix.Notify.failure('Enter data');
      return;
    }
    Notiflix.Loading.circle('Please wait ...');
    dispatch(registerUser({ name, email, password }));
    Notiflix.Loading.remove();
    setName('');
    setEmail('');
    setPassword('');
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
          <Form.Label htmlFor="inputPassword5">Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={onInputChange}
            type="text"
            placeholder="Enter name"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label htmlFor="inputPassword4">Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={onInputChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            placeholder="Enter email"
            id="inputPassword4"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label htmlFor="inputPassword3">Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            type="password"
            id="inputPassword3"
            aria-describedby="passwordHelpBlock"
            onChange={onInputChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button className="m-3" type="submit" variant="dark">
          Register
        </Button>
      </form>
    </div>
  );
}
