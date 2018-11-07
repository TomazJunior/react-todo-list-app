import React, { Component } from "react";
import './TodoItem.css';

export default class TodoItem extends Component {
  render() {
    const todoItem = this.props.todoItem;
    const onRemoveItem = this.props.onRemoveItem;
    return (
      <li className='TodoItem'>
        <span onClick={() => onRemoveItem(todoItem.id)} className="TodoClose">x</span>
        <h4><b>{todoItem.title}</b></h4>
        <p>{todoItem.description}</p> 
      </li>
    );
  }
}