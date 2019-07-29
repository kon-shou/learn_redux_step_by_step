import React from "react";
import "./App.css";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(word) {
    let id = 0;
    this.setState({ todos: [...this.state.todos, { id, word }] });
    ++id;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo todos={this.state.todos} addTodo={this.addTodo} />
        </header>
      </div>
    );
  }
}

export default App;
