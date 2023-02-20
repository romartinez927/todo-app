import { useState } from "react"
import "./form.css"

export default function Form(props) {
    const [name, setName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //Falta agregar un condicional para que no se mande si quieren mandar un string vacio
        props.addTask(name)
        setName("")
    }

    const handleChange = (e) => setName(e.target.value)

    return(
        <form onSubmit={handleSubmit} className="form pt-2 text-center">
            <label htmlFor="form-input"></label>
            <input
                type="text"
                id="form-input"
                className="input form-input"
                name="text"
                autoComplete="off"
                placeholder="add details"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn form-btn">
                Add
            </button>
        </form>
    )
}