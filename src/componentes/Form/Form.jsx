import { useState } from "react"
import "./form.css"

export default function Form(props) {
    const [name, setName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        name.length > 1 && props.addTask(name)
        setName("")
    }

    const handleChange = (e) => setName(e.target.value)

    return(
        <form onSubmit={handleSubmit} className="form container-fluid justify-content-center row pt-3 text-center">
            <input
                type="text"
                id="form-input"
                className="input form-input col-md-5 col-xl-5 col-sm-6"
                name="text"
                autoComplete="off"
                placeholder="add details"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn form-btn col-md-2 col-xl-1 col-sm-3">
                Add
            </button>
        </form>
    )
}