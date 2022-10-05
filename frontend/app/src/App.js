import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTodos = () => {
    setLoading(true);
    fetch('/todos')
      .then((res) => res.json())
      .then((resJson) => {
        setLoading(false);
        setTodos(resJson);
      });
  };

  const addTodo = (id) => {
    const bodyObject = {
      id: id,
      desc: input,
    };
    /* console.log(bodyObject); */
    fetch(`/addTodo/${id}`, {
      method: 'POST',
      body: JSON.stringify(bodyObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);

        fetchTodos();
      });
  };

  useEffect(fetchTodos, []);

  return (
    <div className='App'>
      {loading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <input
            type='text'
            value={input}
            placeholder='enter description'
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addTodo(todos[todos.length - 1].id + 1)}>
            add todo
          </button>
          {todos.map((todo, index) => (
            <h2 key={index}>
              id:{todo.id}
              <br />
              {todo.desc}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
