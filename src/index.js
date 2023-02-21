import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Do coding challenges", completed: true },
  { id: "todo-1", name: "Exercise", completed: false },
  { id: "todo-2", name: "Read a Book", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);


