import React, { Component } from 'react';
import { Form } from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix'; 

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts, setContacts } = this.props;
    
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      Notiflix.Notify.warning(`The contact ${name} already exists!`);
      return;
    }

  const newContact = { id: nanoid(), name, number };
  const newContacts = [...contacts, newContact];
  setContacts(newContacts);

    this.setState({ name: '', number: '' });

    Notiflix.Notify.success(`Contact ${name} added successfully!`);
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Nombre</h2>
        <input type="text" name="name" value={name} onChange={this.handleChange} required />
        <h2>Telefono</h2>
        <input type="tel" name="number" value={number} onChange={this.handleChange} required />
        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

export default ContactForm;
