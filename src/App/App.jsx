import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from 'components/UserMenu/UserMenu';

const Login = lazy(() => import('../views/Login'));
const Registration = lazy(() => import('../views/Registration'));
const Contacts = lazy(() => import('../views/contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<Navigate replace to="login" />} />
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to="contacts" />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
