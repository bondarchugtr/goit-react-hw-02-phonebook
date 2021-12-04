import React, { Component } from 'react';
import s from './InputPhonebook.module.css';
import { nanoid } from 'nanoid';
import Contacts from '../PhoneContacts/PhoneContacts';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onContactsItem();
    this.reset();
  };

  onContactsItem = () => {
    this.setState({
      contacts: [this.state.name, this.state.number],
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={s.nameinput} />
          Name
          <input
            // id={this.nanoid}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label className={s.nameinput} />
          Number
          <input
            // id={this.nanoid}
            type="text"
            name="number"
            value={number}
            // pattern="^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$"
            // title="Number in correct"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Contact</button>
        </form>
        <Contacts contacts={this.onContactsItem} />
      </>
    );
  }
}

export default Form;
