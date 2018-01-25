import uuid from 'uuid';

// ADD_EXPENSE - Action Generator
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  // passing id otherwise we can't use it in our reducer 
  id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
