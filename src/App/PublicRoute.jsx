import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export default function PublicRoute() {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggetIn ? <Navigate to="contacts" /> : <Outlet />;
}
