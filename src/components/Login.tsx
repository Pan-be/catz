import React, { FormEvent } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../state/UserContext";

const Login: React.FC = () => {

    const { user, login, logout } = useContext(UserContext);
    const [username, setUsername] = useState<string>('');

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(username);
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin} className="flex flex-col gap-1">
                    <input type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    )
}

export default Login;