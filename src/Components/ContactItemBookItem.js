import React from 'react';

function ContactItemBookItem({ name, number }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
    </>
  );
}

export default ContactItemBookItem;
