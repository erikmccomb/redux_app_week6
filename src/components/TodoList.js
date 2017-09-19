import React from 'react';
// List needs to subscribe to store, so we bring in connect
import { connect } from 'react-redux';

// We need to pass {todos} props, and they will be passed in a nd rendered.
const TodoList = ({ todos }) => (
  <ul>
    { todos.map( (t, i) => <li key={i}>{t}</li> ) }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);