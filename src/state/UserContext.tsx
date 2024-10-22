import React, { createContext, ReactNode, useState, useContext } from "react";

interface User {
    name: string;
}

interface UserContextType {
    user: User | null;
    login: (username: string) => void;
    logout: () => void;
}

const defaultUserContext: UserContextType = {
    user: null,
    login: () => { },
    logout: () => { }
}

export const UserContext = createContext<UserContextType>(defaultUserContext);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);