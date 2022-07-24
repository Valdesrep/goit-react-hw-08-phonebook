import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import LogInMenu from './LogInMenu';
import LogOutMenu from './LogOutMenu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> PhoneBook </Navbar.Brand>
          <Nav className="me-auto">
            {isLoggedIn ? <LogInMenu /> : <LogOutMenu />}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
