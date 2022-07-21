import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
