import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={e => {
      // changing the redux store using dispatch in order to update the store
      // passing the action inside dispatch
      // passing the input value to the action so it will filter it 
      props.dispatch(setTextFilter(e.target.value))
    }}/>
    <select value={props.filters.sortBy} onChange={(e) => {
      if(e.target.value === 'date'){
        props.dispatch(sortByDate())
      } else if(e.target.value === 'amount'){
        props.dispatch(sortByAmount())
      }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)