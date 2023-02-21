import "./filterButton.css"

export default function FilterButton(props) {
    return (
        <div className="col-3 filter-container">
            <button 
                type="button" 
                onClick={() => props.setFilter(props.name)} 
                className="btn filter-btn" 
                aria-pressed={props.isPressed}
            >
                <span className="visually-hidden">Show </span>
                <span>{props.name}</span>
                <span className="visually-hidden"> tasks</span>
            </button>
        </div>
    )
}