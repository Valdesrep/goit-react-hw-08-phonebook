import { NavLink } from 'react-router-dom';

export default function LogOutMenu() {
  return (
    <div>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </div>
  );
}
