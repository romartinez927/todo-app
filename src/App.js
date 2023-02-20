import FilterButton from "./componentes/FilterButton/FilterButton";
import Form from "./componentes/Form/Form";
import Todo from "./componentes/Todo/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";
import Brand from "./componentes/Brand/Brand";
import Footer from "./componentes/Footer/Footer";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState("All")

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => 
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />)

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={ name === filter }
      setFilter= {setFilter}
    />
  ))

  function addTask(name) {
    // name es un string, y task es un array de objetos, por lo que si lo dejamos así,
    // el string reemplazará al array. Por esto, necesitamos (primero) poner a name
    // en un objeto que tenga la misma estructura que los tasks ya existentes. (newTask)
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    // Segundo, necesitamos hacer un nuevo array con este nuevo task y los anteriores,
    // por lo que se usa spread syntax para copiar el array existente, y agregar nuestro 
    // nuevo objeto al final.
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }

  return (
    <div className="todoapp">
      <Brand />
      <div className="filters container-fluid text-center">
        {filterList}
      </div>
      <Form addTask={addTask} />
      <div className="justify-content-center">
        <ul
          role="list"
          className="todo-list container-fluid justify-content-center"
          aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
