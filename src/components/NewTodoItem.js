import React, { Component } from "react";
import uuid from "uuid";

export default class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
  }

  handleDescriptionTextChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  _resetFields() {
    this.setState({
      description: ''
    });
  };

  render() {
    const description = this.state.description;
    return (  
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Description" 
          value={description} 
          onChange={this.handleDescriptionTextChange}
        />
        <button type="submit"> Add New Item</button>
      </form>
    );
  }

  handleSubmit(e) {
    const item = {
      id: uuid.v4(),
      description: this.state.description
    };
    this.props.onAddItem(item);
    this._resetFields();
    e.preventDefault();
  }
}