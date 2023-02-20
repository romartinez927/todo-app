import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Do coding challenges", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);


