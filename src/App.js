import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList></TodoList>
        </header>
        <div>List of items</div>
      </div>
    );
  }
}

export default App;
