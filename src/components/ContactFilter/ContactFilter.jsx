import s from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/action';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactFilter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={s.form}>
      <Form.Label htmlFor="inputPassword5">Find contacts by name</Form.Label>
      <Form.Control
        name="filter"
        value={value}
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
};

export default ContactFilter;
