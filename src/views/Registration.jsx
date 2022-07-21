import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authOperation';

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));
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
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            name="name"
            value={name}
            onChange={onInputChange}
            type="text"
            placeholder="Enter name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={email}
            onChange={onInputChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            placeholder="Enter email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            value={password}
            onChange={onInputChange}
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
