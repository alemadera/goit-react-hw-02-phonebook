import React, { Component } from 'react';
import { List } from './App.styled';

class ContactListItem extends Component {
  render() {
    const { contact, deleteContact } = this.props;

    return (
      <List>
        {contact.name}: {contact.number}
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </List>
    );
  }
}

export default ContactListItem;
