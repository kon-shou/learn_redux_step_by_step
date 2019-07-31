import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "./actions";

const Todo = () => {
  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos)
  const handleAddTodo = (word) => dispatch(addTodo(word))

  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          handleAddTodo(input.value);
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
