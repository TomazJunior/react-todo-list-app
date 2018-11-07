import React, { Component } from "react";
import uuid from "uuid";
export default class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      formValid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
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

  _resetFields() {
    this.setState({
      description: '',
      title: ''
    });
  };

  render() {
    const description = this.state.description;
    const title = this.state.title;
    return (  
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Title" 
          value={title} 
          onChange={this.handleTitleTextChange}
        />
        <input placeholder="Description" 
          value={description} 
          onChange={this.handleDescriptionTextChange}
        />
        <button disabled={!this.state.formValid} type="submit">Add</button>
      </form>
    );
  }

  handleSubmit(e) {
    const item = {
      id: uuid.v4(),
      ...this.state
    };
    this.props.onAddItem(item);
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
    if (!this.state.title || !this.state.description) { 
      this._isFormValid(false);
    } else {
      this._isFormValid(true);
    }
  }
}