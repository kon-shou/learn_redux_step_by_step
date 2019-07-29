import React from "react";

const Todo = ({ todos, addTodo }) => {
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
        <p key={index}>{todo.word}</p>
      ))}
    </div>
  );
};

export default Todo;
