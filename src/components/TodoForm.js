import React from 'react';
import { connect } from 'react-redux';

// Class because the form will have state
class TodoForm extends React.Component {
  state = {name: ''}

  onChange = (e) => {
    this.setState({name: e.target.value});
  }
  handleSubmit = (e) => {
    // stop the form from behaving as a form, and use the below JS instead.
    e.preventDefault();
    // Get name from input
    let name=this.state.name;
    // Update redux store
    this.props.dispatch({ type: 'ADD_TODO', todo: name });
    // Clear input
    this.setState({name: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value ={this.state.name} 
          onChange={this.onChange} 
        />
      </form>
    )
  }
}

export default connect()(TodoForm);