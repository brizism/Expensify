import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

//const expensesReducerDefaultState = [];

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

// Filters Reducer 

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Store Creation

const store = createStore(
  combineReducers({
    // The root state is expenses
    // expensesReducer is the reducer that is managing expenses
    expenses: expensesReducer,
    filters: filtersReducer
  })
);


console.log(store.getState())

const demoState = {
  expenses: [{
    id: 'idjdhddeaa',
    description: 'January Rent',
    note: 'This was the final payment',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

