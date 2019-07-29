import React from "react";

import { addTodo } from "./actions";

const Todo = ({ store, todos }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          store.dispatch(addTodo(input.value))
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

export default Todo;
