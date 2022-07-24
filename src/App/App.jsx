import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import authSelectors from 'redux/auth/authSelectors';
import PrivateRoute from './PrivateRoute';
import UserMenu from 'components/UserMenu/UserMenu';
import PublicRoute from './PublicRoute';
import Container from 'react-bootstrap/Container';

const Login = lazy(() => import('../views/Login'));
const Registration = lazy(() => import('../views/Registration'));
const Contacts = lazy(() => import('../views/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  return (
    <>
      <UserMenu />
      <Container>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
export default App;
