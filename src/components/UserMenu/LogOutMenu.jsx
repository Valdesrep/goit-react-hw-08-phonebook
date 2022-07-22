import { NavLink } from 'react-router-dom';
import s from './LogOut.module.css';
export default function LogOutMenu() {
  return (
    <div>
      <NavLink className={s.link} to="/login">
        LogIn
      </NavLink>
      <NavLink className={s.link} to="/register">
        Registration
      </NavLink>
    </div>
  );
}
