export interface User {
    email?: string;
    username: string;
    password?: string;
    id?: number;
}

export interface TypicalMessageResponse {
    msgBody: string;
    error: true;
}

export interface SuccessRegisterResponse {
    email: string;
    username: string;
}

export type RegisterResponse = TypicalMessageResponse | SuccessRegisterResponse;

export interface LoginResponse {
    isAuthenticated: boolean;
    user: User;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> | null;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
}