import "./todo.css"

export default function Todo(props) {
    return(
        <li className="todo container-fluid d-flex pt-5 px-3 justify-content-center">
            <div className="todo-container d-flex justify-content-between">
                <div>
                    <input 
                        id={props.id} 
                        type="checkbox"
                        className="checkbox" 
                        defaultChecked={props.completed}
                        onChange={() => props.toggleTaskCompleted(props.id)} 
                    />
                    <label 
                        className={props.completed === false ? "todo-label px-2" : "todo-label px-2 checked"} 
                        htmlFor={props.id}>
                            {props.name}
                    </label>
                </div>
                <button 
                        type="button" 
                        className="btn"
                        onClick={() => props.deleteTask(props.id)} 
                >
                        <span className="material-icons material-symbols-outlined">
                            delete
                        </span>
                        <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    )
}