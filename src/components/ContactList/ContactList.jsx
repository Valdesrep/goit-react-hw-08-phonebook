import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Notiflix from 'notiflix';
import {
  useGetAllContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactApi';

const ContactList = () => {
  const { data, error, isError, isFetching } = useGetAllContactsQuery();

  const [deleteContact, { isLoading }] = useDeleteContactsMutation();
  const getFilterContacts = (contacts, filter) => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    const filtredContacts = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    return filtredContacts;
  };

  const contacts = useSelector(state => getFilterContacts(data, state.filter));
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Contacts</h2>
      {isError && Notiflix.Notify.failure({ error })}
      {isFetching && Notiflix.Loading.circle('Please wait ...')}
      {!isFetching && Notiflix.Loading.remove()}
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li className={s.item} key={id}>
                <span>
                  {name}: {number}
                </span>
                <button
                  className={s.delete}
                  type="button"
                  onClick={() => deleteContact(id)}
                  disabled={isLoading}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
