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
    this.removeItemHandle = this.removeItemHandle.bind(this);
    this.dropItemHandle = this.dropItemHandle.bind(this);
  }

  addItemHandle(item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  }
    
  removeItemHandle(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });
  }

  dropItemHandle(droppedItemId, droppedOnItemId) {
    const toPosition = this.state.items.findIndex((item) => item.id === droppedOnItemId);
    const fromPosition = this.state.items.findIndex((item) => item.id === droppedItemId);
    this.state.items.splice(toPosition, 0, this.state.items.splice(fromPosition, 1)[0]);
    this.setState({
      items: [].concat(this.state.items)
    })
  }

  render() {
    const todoItems = this.state.items.map((todoItem) => 
      <TodoItem onDropItem={this.dropItemHandle} onRemoveItem={this.removeItemHandle} key={todoItem.id} todoItem={todoItem}></TodoItem>
    );
    return (
      <div>
        <div className="TodoList-header">
          <h2>ToDo List App</h2>
        </div>
        <div className="TodoList-body">
          <NewTodoItem onAddItem={this.addItemHandle}></NewTodoItem>
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
