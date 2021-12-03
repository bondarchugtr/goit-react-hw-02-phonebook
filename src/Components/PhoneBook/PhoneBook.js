import React, { Component } from 'react';
// import s from '../InputPhoneBook/InputPhonebook.module.css';
import Form from '../InputPhoneBook/InputFormPhonebook';
import Contacts from '../PhoneContacts/PhoneContacts';
import s from './PhoneBook.module.css';
class PhoneBook extends Component {
  formSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmit} />

        <div>
          <Contacts el={this.handleChange} />
        </div>
      </>
    );
  }
}
export default PhoneBook;
