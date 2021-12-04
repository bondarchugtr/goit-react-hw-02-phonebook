import React from 'react';
import { nanoid } from 'nanoid';
import ContactItemBookItem from '../ContactItemBookItem';

const Contacts = ({ contacts = [] }) => {
  return (
    <div>
      <ul>
        {contacts.map((el, index) => (
          <li key={index}>
            <ContactItemBookItem name={el.name} number={el.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
