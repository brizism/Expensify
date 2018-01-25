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

export default expensesReducer;