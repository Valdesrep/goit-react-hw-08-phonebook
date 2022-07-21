import s from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/action';

const ContactFilter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={s.form}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default ContactFilter;
