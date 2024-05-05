import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      const input = event.target;
      const value = input.value.trim();
      if (value !== '') {
        const newTodoList = [...todoList, value];
        setTodoList(newTodoList);
        input.value = '';
      }
    }
  };

  const moveTodo = (index) => {
    const item = todoList[index];
    const newTodoList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    const newDoneList = [...doneList, item];
    setTodoList(newTodoList);
    setDoneList(newDoneList);
  };

  const deleteTodo = (index, isDoneList) => {
    if (isDoneList) {
      const newDoneList = [...doneList.slice(0, index), ...doneList.slice(index + 1)];
      setDoneList(newDoneList);
    } else {
      const newTodoList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
      setTodoList(newTodoList);
    }
  };

  return (
    <div className="App">
      <h1 className="title">UMC Study Plan</h1>
      <hr className="divider" />
      <div className="container">
        <input type="text" id="plan" placeholder="스터디 계획을 작성해보세요!" onKeyPress={addTodo} />
        <div className="todo">
          <h3>해야 할 일</h3>
          <ul>
            {todoList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => moveTodo(index)}>완료</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="done">
          <h3>해낸 일</h3>
          <ul>
            {doneList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteTodo(index, true)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
