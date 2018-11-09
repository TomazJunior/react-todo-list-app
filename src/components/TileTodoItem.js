import React, { Component } from "react";
import ModalDialog from './ModalDialog';
import './TileTodoItem.css';
import EditTodoItem from "./EditTodoItem";

export default class TileTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragStart: false,
      showModal: false
    }
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleSubmitEditItem = this.handleSubmitEditItem.bind(this);
  }

  handleDragStart(e, todoItem) {
    console.log('handleDragStart', todoItem.id);
    this.setState({
      dragStart: true
    });
    e.dataTransfer.setData('id', todoItem.id);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  handleDragEnter() {
    this.setState({
      over: true
    })
  }
  
  handleDragLeave() {
    this.setState({
      over: false
    })
  }

  handleDrop(e, todoItem, callback) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    const droppedItemId = parseInt(e.dataTransfer.getData('id'));

    if (todoItem.id !== droppedItemId && callback) { 
      callback(droppedItemId, todoItem.id);
    }
    return false;
  }

  handleDragEnd(e) {
    this.setState({
      dragStart: false
    });
  }

  handleEditItem() {
    this.setState({
      showModal: true
    });
  }

  handleCloseEditItem() {
    this.setState({
      showModal: false
    });
  }

  handleSubmitEditItem(item, callback) {
    callback(item);
    this.handleCloseEditItem();
  }

  render() {
    const todoItem = this.props.todoItem;
    const onRemoveItem = this.props.onRemoveItem;
    const onDropItem = this.props.onDropItem;
    const onEditItem = this.props.onEditItem;
    const todoItemClasses = ['TodoItem'];
    const showModal = this.state.showModal;

    this.state.dragStart && todoItemClasses.push('dragStart');
    this.state.over && todoItemClasses.push('over');

    return (
      <React.Fragment>
        {showModal &&
            <ModalDialog onClose={() => this.handleCloseEditItem()}>
              <EditTodoItem 
                formTitle='Edit Item' 
                todoItem={todoItem}
                onSubmitItem = {(item) => this.handleSubmitEditItem(item, onEditItem)}
              ></EditTodoItem>
            </ModalDialog>}
        <li 
          draggable className={todoItemClasses.join(' ')}
          onDragStart={(e) => this.handleDragStart(e, todoItem)}
          onDragOver={this.handleDragOver}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDrop={(e) => this.handleDrop(e, todoItem, onDropItem)}
          onDragEnd={this.handleDragEnd}
          >
            <kbd className='status'>{todoItem.status}</kbd>
            <span onClick={() => onRemoveItem(todoItem.id)} className="TodoClose">x</span>
            <span onClick={() => this.handleEditItem()}>...</span>
            <div className='body'>
              <h4><b>{todoItem.title}</b></h4>
              <p>{todoItem.description}</p> 
            </div>
            
        </li>
      </React.Fragment>
      
    );
  }
}