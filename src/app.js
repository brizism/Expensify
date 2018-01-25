import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));

store.dispatch(setTextFilter('water'));



  const state = store.getState(); // saving the entire state of entire expenses array and all of the filters
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // saving the return value and passing the state of expenses and filters
  console.log(visibleExpenses)




ReactDOM.render(<AppRouter />, document.getElementById('app'))