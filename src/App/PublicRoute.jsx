import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggetIn && restricted;

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }
  return children;
}
