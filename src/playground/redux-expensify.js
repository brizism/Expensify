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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

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
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.id){
          return { ...expense, ...action.updates }
        } else {
          return expense;
        }
      })
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
    case 'SET_TEXT_FILTER':
      return {
        ...state, 
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

// timestamps (+ or - integer value) (milliseconds)
// January 1st 1970 (unix epoch) starting point of our timestamps


// Get visible expenses function
// destructuring the second argument of filters creating variables for the individual ones
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'num' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // if all three match, they'll be kept in the array
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};


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
  const state = store.getState(); // saving the entire state of entire expenses array and all of the filters
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // saving the return value and passing the state of expenses and filters
  console.log(visibleExpenses)
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id:expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))


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

const user = {
  name: 'Jen',
  age: 24
};

// console.log({
//   hey: 29,
//   ...user,
//   location: 'Bronx'
// })