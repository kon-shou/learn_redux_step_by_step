import React from "react";
import { connect } from "react-redux";

import { addTodo } from "./actions";

const Todo = props => {
  const { todos, addTodo } = props;

  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <p key={index}>{todo.text}</p>
      ))}
    </div>
  );
};

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    addTodo: text => dispatch(addTodo(text))
  })
)(Todo);
