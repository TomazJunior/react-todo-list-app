import React, { Component } from "react";
import uuid from "uuid";

export default class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
  }

  handleDescriptionTextChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleTitleTextChange(e) {
    this.setState({
      title: e.target.value
    });
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
        <button type="submit">Add</button>
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
    e.preventDefault();
  }
}