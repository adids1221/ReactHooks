import React, { useState, useReducer } from "react";
import Todo from "./Todo";

//Use the actions object like the using of Enum in typescript
export const ACTIONS = {
  ADD_TODO: "add-todo",
  DEL_TODO: "del-todo",
  TOGGLE_TODO: "toggle-todo",
};

//useReducer is similler to Redux with the action and disptach

//The reducer is a pure function that accepts 2 parameters: the current state and an action object
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)];
    case ACTIONS.DEL_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
      return todos;
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function newToDo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function ReducerComponent() {
  //The dispatch is a special function that dispatches an action object.
  //The dispatch function is created for your by the useReducer() hook
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //dispatch takes action type and payload
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default ReducerComponent;
