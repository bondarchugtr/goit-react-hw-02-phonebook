import React, { Component } from 'react';
import s from './InputPhonebook.module.css';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleInputChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={s.nameinput}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label className={s.nameinput}>Number</label>
          <input
            type="text"
            name="number"
            // pattern="^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$"
            // title="Number in correct"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}

export default Form;
