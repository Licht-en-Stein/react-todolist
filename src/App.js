import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React</h1>
      <div>
        <TodoHeader />
        <Todo />
      </div>
      </div>
    );
  }
}

export default App;
