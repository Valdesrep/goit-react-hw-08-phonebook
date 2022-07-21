import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggetIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
