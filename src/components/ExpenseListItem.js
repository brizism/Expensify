import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// destructuring the props object to get the individual things off of it
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
);

// when we use connect we do not have to take anything from the state
// below, connect is not giving us any values from state, it just give us access to dispatch 
export default connect()(ExpenseListItem);
