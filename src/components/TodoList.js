import React, { Component } from "react";
import EditTodoItem from "./EditTodoItem";
import TileTodoItem from "./TileTodoItem";
import './TodoList.css';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [{
        id: 1,
        title: 'title 1',
        description: 'description 1',
        status: 'open'
      },
      {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        status: 'close'
      },
      {
        id: 3,
        title: 'title 3',
        description: 'description 3',
        status: 'open'
      }]
    }
    this.addItemHandle = this.addItemHandle.bind(this);
    this.removeItemHandle = this.removeItemHandle.bind(this);
    this.dropItemHandle = this.dropItemHandle.bind(this);
    this.editItemHandle = this.editItemHandle.bind(this);
  }

  addItemHandle(item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  }
    
  editItemHandle(todoItem) {
    const todoItemPosition = this.state.items.findIndex((item) => item.id === todoItem.id);
    this.state.items.splice(todoItemPosition, 1, todoItem);
    this.setState({
      items: [].concat(this.state.items)
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
      <TileTodoItem 
        onDropItem={this.dropItemHandle} 
        onRemoveItem={this.removeItemHandle} 
        key={todoItem.id} 
        todoItem={todoItem}
        onEditItem={this.editItemHandle}
        >
      </TileTodoItem>
    );
    return (
      <div>
        <div className="TodoList-header">
          <h2>ToDo List App</h2>
        </div>
        <div className="TodoList-body">
          <EditTodoItem formTitle='New Item' onSubmitItem={this.addItemHandle}></EditTodoItem>
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
