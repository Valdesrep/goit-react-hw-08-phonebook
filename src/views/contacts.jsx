import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactFilter from '../components/ContactFilter/ContactFilter';

export default function PhoneBook() {
  return (
    <>
      <ContactForm></ContactForm>
      <ContactFilter />
      <ContactList />
    </>
  );
}
