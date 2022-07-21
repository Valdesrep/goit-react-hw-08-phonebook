import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from 'components/UserMenu/UserMenu';
// import Navigation from '../components/Navigation/Navigation';

const Login = lazy(() => import('../views/Login'));
const Registration = lazy(() => import('../views/Registration'));
const Contacts = lazy(() => import('../views/contacts'));

export const App = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
