export interface User {
    email?: string;
    username: string;
    password?: string;
    id?: number;
}

export interface TypicalMessageResponse {
    msgBody: string;
    error: boolean;
}

export interface SuccessRegisterResponse {
    email: string;
    username: string;
}

export type RegisterResponse = TypicalMessageResponse | SuccessRegisterResponse;

export interface LoginResponse {
    isAuthenticated: boolean;
    user: User | null;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> | null;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
}

export interface GetPostType {
    postId: number;
    title: string;
    body: string;
    createdAt: Date;
    boardId: number;
    boardName: string;
    creatorId: number;
    username: string;
}