import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'


// now we have access to props.dispatch 
const AddExpense = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
    // passing onSubmit as a prop 
      onSubmit={(expense) => {
        // dispatching our action addExpense (imported above) with the expense obj
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
)


// connecting AddExpense to the store so it cana dispatch
export default connect()(AddExpense);