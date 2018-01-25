import React from 'react';

// destructuring the props object to get the individual things off of it
const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
