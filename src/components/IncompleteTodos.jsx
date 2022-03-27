import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <>
      <div className="incomplete-area">
        <p className="title">TODO incomplete</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>COMPLETE</button>
                <button onClick={() => onClickDelete(index)}>DELETE</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
