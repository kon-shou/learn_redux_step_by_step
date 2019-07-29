import React from "react";
import { createStore } from 'redux'
import todoApp from './reducers'

import "./App.css";
import Todo from "./Todo";

const store = createStore(todoApp)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {todos: []};
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo store={store} todos={this.state.todos}/>
        </header>
      </div>
    );
  }
}

export default App;
