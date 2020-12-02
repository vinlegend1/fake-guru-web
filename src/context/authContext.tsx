import React, { createContext, useEffect, useState } from 'react';
import { useIsAuth } from '../utils/hooks/useIsAuth';
import { AuthContextType, User } from '../types';
import { useRouter } from 'next/router';

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
    const router = useRouter();

    useEffect(() => {
        const thing = async () => {
            const { isAuth, user: theUser } = await useIsAuth(router);
            setIsAuthenticated(isAuth);
            setUser(theUser);
        }
        thing();
    }, []);
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