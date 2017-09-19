import React from 'react';
import { connect } from 'react-redux';

const styles ={
  link: { textDecoration: 'underline', color: 'blue', cursor: 'pointer' }
}

const FilterLink = ({filter, dispatch, children}) => {
  if (children === filter) {
    return <span>{children}</span>
  } else {
    return
      <span
        style={styles.link}
        onClick={() => dispatch({ type: 'SET_FILTER', filter: children }) }
      >
        {children}
      </span>
  }
}

const mapStateToProps = (state) => {
  return {filter: stater.filter}
}

export default FilterLink;

