import React, { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
      ],
      filter: ''
    };
  }

  handleSetContacts = (newContacts) => {
    this.setState({ contacts: newContacts });
  };
  
  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleaddContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Agenda de Contactos</h1>
        <ContactForm contacts={this.state.contacts} setContacts={this.handleSetContacts} />
        <h2>Contactos</h2>
        <h3>Busca el contacto por nombre</h3>
        <Filter filter={filter} handleChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.handleDeleteContact} />
      </Container>
    );
  }
}

export default App;
