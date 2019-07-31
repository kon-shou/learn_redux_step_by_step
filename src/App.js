import React from "react";
import { createStore } from 'redux'
import todoApp from './reducers'

import "./App.css";
import Todo from "./Todo";
import Provider from "react-redux/es/components/Provider";

const store = createStore(todoApp)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <Todo />
          </header>
        </Provider>
      </div>
    );
  }
}

export default App;
