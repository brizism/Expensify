import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE - Action Generator
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})



// REMOVE_EXPENSE - Action Generator
// Passing an object as the first argument, destructuring that object, if it does not exists we destructure an empty object
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  // passing id otherwise we can't use it in our reducer 
  id
})

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
    case 'ADD_EXPENSE':
      return [
        ...state, // spread operator (spreading out all of the current expenses)
        action.expense // then adding the new item - this will work the same as using concat, we are just joining the old values with a new one 
        // state.concat(action.expense)
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id) // destructuring the expense and just getting the id, hence { id }
      // { id } means give me the value of the id property from the object and assign it to the variable id for this function.
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

store.subscribe(() => {
  console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id:expenseOne.expense.id }))


// const demoState = {
//   expenses: [{
//     id: 'idjdhddeaa',
//     description: 'January Rent',
//     note: 'This was the final payment',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

