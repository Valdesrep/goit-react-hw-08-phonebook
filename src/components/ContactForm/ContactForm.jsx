import { useState } from 'react';
import s from './ContactForm.module.css';
import { useGetAllContactsQuery } from 'redux/contactApi';
import { useCreateContactMutation } from 'redux/contactApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetAllContactsQuery();

  const isInContacts = contacts?.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const onFormSubmit = event => {
    event.preventDefault();
    isInContacts
      ? alert(`${name} is already in contacts`)
      : createContact({ name, number });
    setName('');
    setNumber('');
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <h2 className={s.title}>Phonebook</h2>

      <Form.Label htmlFor="inputPassword5">Name</Form.Label>
      <Form.Control
        type="text"
        required
        value={name}
        onChange={onInputChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="inputPassword5">Number</Form.Label>
      <Form.Control
        type="tel"
        id="inputPassword5"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onInputChange}
        aria-describedby="passwordHelpBlock"
      />
      <Button className={s.button} type="submit" variant="dark">
        Add Contact
      </Button>
    </form>
  );
}

export default ContactForm;
