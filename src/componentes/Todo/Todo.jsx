import "./todo.css"

export default function Todo(props) {
    return(
        <li className="todo d-flex pt-4 px-2">
            <div className="container-fluid">
                <input 
                    id={props.id} 
                    type="checkbox"
                    className="checkbox" 
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)} 
                />
                <label className="todo-label px-2" htmlFor={props.id}>
                {props.name}
                </label>
            </div>
            <div>
                <button 
                        type="button" 
                        className="btn"
                        onClick={() => props.deleteTask(props.id)} 
                >
                        <span class="material-icons material-symbols-outlined">
                            delete
                        </span>
                        <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    )
}