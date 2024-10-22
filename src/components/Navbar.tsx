import React, { useContext } from "react"
import { UserContext } from "../state/UserContext"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

    const { user, logout } = useContext(UserContext)

    return (
        <nav className="flex justify-center w-full">
            <ul className="flex justify-end w-full gap-5 items-center">
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/hello">Hello</Link></li>
                {user ? (
                    <li><button onClick={logout}>Logout</button></li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar