import React, { createContext, useState } from 'react';
import { AuthContextType, User } from '../types';

export const defaultAuthContext: AuthContextType = {
    isAuthenticated: false,
    setIsAuthenticated: null,
    setUser: null,
    user: null
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    return (
        <div>
            <AuthContext.Provider value={{
                isAuthenticated,
                setIsAuthenticated,
                setUser,
                user
            }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider