import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import LogInMenu from './LogInMenu';
import LogOutMenu from './LogOutMenu';

export default function UserMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? <LogInMenu /> : <LogOutMenu />}</>;
}
