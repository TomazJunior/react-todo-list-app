import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class App extends Component {
  constructor() {
    super();
    toastr.options = {
      positionClass : 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 10000
    }
    toastr.clear();
  }

  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
