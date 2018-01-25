// timestamps (+ or - integer value) (milliseconds)
// January 1st 1970 (unix epoch) starting point of our timestamps


// Get visible expenses function
// destructuring the second argument of filters creating variables for the individual ones
export default (expenses, { text, sortBy, startDate, endDate }) => {
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

//export default getVisibleExpenses;