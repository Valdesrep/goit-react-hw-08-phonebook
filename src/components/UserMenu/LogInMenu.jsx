import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperation';

export default function LogInMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>
        Hallo,<b>{name}</b>
      </span>
      <button onClick={() => dispatch(logOut())} type="submit">
        Exit
      </button>
    </div>
  );
}
