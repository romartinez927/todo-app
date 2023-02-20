import { useState } from "react";

export default function Main() {
    const [description, setDescription] = useState("")
    const evitarDefault = (e) => e.preventDefault()


    return (
        <div className="container-fluid text-center">
            <main>
                <form>
                    <input 
                        type="text" 
                        className="text" 
                        placeholder="add details"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button 
                        onClick={evitarDefault}
                        disabled={description ? "" : "disabled"}
                    >
                        Add
                    </button>
                </form>
            </main>
        </div>
    )
}