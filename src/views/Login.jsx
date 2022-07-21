import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperation';

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
      <form onSubmit={onFormSubmit}>
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}
