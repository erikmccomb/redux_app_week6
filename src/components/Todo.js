import React from 'react';
import {connect} from 'react-redux';

const.styles = {
  complete: {textDecoration: 'line=through', color: 'gray' }
  todo: { cursor: 'pointer'}
}

const Todo = ({ id, name, complete, dispatch}) => {
  <li
    onClick={ () => dispatch({ type: 'TOGGLE_TODO', id }) }
    // if complete true, it will combine styles.todo with styles.complete,
    // otherwise, just a regular styling will be used.
    style={ complete ? {...styles.complete, ...styles.todo} : styles.todo }
  >
    {name}
  </li>
}

export default connect()(Todo);
