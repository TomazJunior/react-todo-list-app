import React, { Component } from "react";
import NewTodoItem from "./NewTodoItem";

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
          items: []
        }
        this.addItemHandle = this.addItemHandle.bind(this);
    }

    addItemHandle(item) {
      this.state.items.push(item);
    }
    

    render() {
        return (
            <div>
                <div className="header">
                    <h2>ToDo List App</h2>
                    <NewTodoItem onAddItem={this.addItemHandle}></NewTodoItem>
                </div>
            </div>
        );
    }
}
