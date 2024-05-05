import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
