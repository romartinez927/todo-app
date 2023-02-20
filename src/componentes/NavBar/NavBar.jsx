import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul className="d-flex justify-content-center gap-5">
                <Link to="/">
                    <li>All</li>
                </Link>
                <Link to="/">
                    <li>Active</li>
                </Link>
                <Link to="/completed">
                    <li>Complete</li>
                </Link>        
            </ul>
        </nav>
    )

}