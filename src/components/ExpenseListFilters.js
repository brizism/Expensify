import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={e => {
      // changing the redux store using dispatch in order to update the store
      // passing the action inside dispatch
      // passing the input value to the action so it will filter it 
      props.dispatch(setTextFilter(e.target.value))
      console.log(e.target.value);
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)