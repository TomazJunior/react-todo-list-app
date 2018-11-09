import React, {Component} from 'react';

export default class StatusTodoItem extends Component{
  
  constructor(props) {
    super(props);
    this.state = {value: 'open'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event);
  }

  render() {
    return (
      <select name='Status' value={this.state.value} onChange={this.handleChange}>
        <option value="open">Open</option>
        <option value="close">Close</option>
      </select>
    )
  }
}