import React, { Component } from "react";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";
import './TodoList.css';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
          items: []
        }
        this.addItemHandle = this.addItemHandle.bind(this);
    }

    addItemHandle(item) {
      this.setState({
        items: this.state.items.concat([item])
      });
    }
    
    render() {
      const todoItems = this.state.items.map((todoItem) => 
        <TodoItem key={todoItem.id} todoItem={todoItem}></TodoItem>
      );
      return (
          <div>
              <div className="TodoList-header">
                  <h2>ToDo List App</h2>
              </div>
              <div className="TodoList-body">
                <h3>Add new Item</h3>
                <NewTodoItem onAddItem={this.addItemHandle}></NewTodoItem>
                <hr></hr>
                <div>
                  <h3>Items</h3>
                  <ul className="TodoList-container">
                    {todoItems}
                  </ul>
                </div>
              </div>
              
          </div>
      );
    }
}
