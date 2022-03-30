import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickUndo } = props;

  return (
    <>
      <div className="complete-area">
        <p className="title">TODO completed</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickUndo(index)}>UNDO</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
