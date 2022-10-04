import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch('/todos')
      .then((res) => res.json())
      .then((resJson) => setTodos(resJson));
  };

  useEffect(fetchTodos, []);

  return (
    <div className='App'>
      {todos.map((todo) => (
        <h2>{todo.desc}</h2>
      ))}
    </div>
  );
}

export default App;
