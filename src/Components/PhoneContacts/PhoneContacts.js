import React from 'react';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts }) => {
  return (
    <div>
      <ul>
        {/* {contacts.map(el => (
          <li key={nanoid}>{el}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Contacts;
