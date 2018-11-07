import React, { Component } from "react";
import './TodoItem.css';

export default class TodoItem extends Component {
  render() {
    const todoItem = this.props.todoItem;
    return (
      <div className='TodoItem'>
        <h4><b>{todoItem.title}</b></h4>
        <p>{todoItem.description}</p> 
      </div>
    );
  }
}