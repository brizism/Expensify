import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      // The root state is expenses
      // expensesReducer is the reducer that is managing expenses
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};



