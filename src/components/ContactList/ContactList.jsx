import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Notiflix from 'notiflix';
import {
  useGetAllContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactApi';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <ListGroup className={s.ul}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ListGroup.Item className={s.Items} variant="light" key={id}>
                <span className={s.text}>
                  <b>{name}</b> : {number}
                </span>
                <Button
                  type="button"
                  onClick={() => deleteContact(id)}
                  disabled={isLoading}
                  variant="dark"
                >
                  Delete
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default ContactList;
