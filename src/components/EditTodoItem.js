import React, { Component } from "react";
import uuid from "uuid";
import "./EditTodoItem.css";
import StatusTodoItem from './StatusTodoItem';

export default class EditTodoItem extends Component {
  constructor(props) {
    super(props);
    if (props.todoItem) {
      this.state = {
        ...props.todoItem,
        formValid: true
      };
    } else {
      this.state = {
        title: '',
        description: '',
        status: 'open'
      };
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleDescriptionTextChange(e) {
    this.setState({
      description: e.target.value
    });
    this._validateData();
  }

  handleTitleTextChange(e) {
    this.setState({
      title: e.target.value
    });
    this._validateData();
  }

  handleStatusChange(e) {
    this.setState({
      status: e.target.value
    });
    this._validateData();
  }

  _resetFields() {
    this.setState({
      description: '',
      title: ''
    });
  };

  render() {
    const description = this.state.description;
    const title = this.state.title;
    const formTitle = this.props.formTitle;
    return (  
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>{formTitle}</legend>
          <p>
            <label className="field" htmlFor="Title"><span>*</span>Title:</label>
            <input
              name="Title"
              value={title} 
              onChange={this.handleTitleTextChange}
            />
          </p>
          <p>
            <label className="field" htmlFor="Description"><span>*</span>Description:</label>
            <input
              name="Description"
              value={description} 
              onChange={this.handleDescriptionTextChange}
            />
          </p>
          <p>
            <label className="field" htmlFor='Status'><span>*</span>Status:</label>
            <StatusTodoItem onChange={this.handleStatusChange}></StatusTodoItem>
          </p>
          <button disabled={!this.state.formValid} type="submit">Save</button>
        </fieldset>
      </form>
    );
  }

  handleSubmit(e) {
    const item = {
      id: uuid.v4(),
      ...this.state
    };
    this.props.onSubmitItem(item);
    this._resetFields();
    this._isFormValid(false);
    e.preventDefault();
  }

  _isFormValid(formValid) {
    this.setState({
      formValid
    });
  }

  _validateData() {
    if (!this.state.title || !this.state.description || !this.state.status) { 
      this._isFormValid(false);
    } else {
      this._isFormValid(true);
    }
  }
}