import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperation';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './LogIn.module.css';

export default function LogInMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.Box}>
      <p className={s.text}>
        Hallo, <b>{name}</b>
      </p>
      <Button
        className={s.button}
        onClick={() => dispatch(logOut())}
        type="submit"
        variant="outline-light"
      >
        Exit
      </Button>{' '}
    </div>
  );
}
