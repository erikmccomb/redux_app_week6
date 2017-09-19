import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

// app will not hold state here, state will be held in redux. app can be a function
const App = () => {
  <div>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
} 

// No functions arrays or state passed down 

export default App;