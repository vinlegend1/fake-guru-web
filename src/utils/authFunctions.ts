import { serverURL } from "../constants";
import { LoginResponse, RegisterResponse, TypicalMessageResponse, User } from "../types";

export const callRegister = async (user: User): Promise<RegisterResponse> => {
    const data = await fetch(serverURL + '/api/user/register', {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(user)
    });

    return data.json();
}

export const callLogin = async (user: User): Promise<LoginResponse> => {
    const data = await fetch(serverURL + '/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(user)
    });

    if (data.status !== 200) {
        return {
            isAuthenticated: false,
            user: null
        }
    }

    return data.json();
}

export const callMeRequest = async (): Promise<User | null> => {
    const data = await fetch(serverURL + '/api/user/me', {
        credentials: "include"
    });
    if (data.status === 401) {
        return null;
    }
    return data.json();
}

export const callLogout = async (): Promise<TypicalMessageResponse | null> => {
    const response = await fetch(serverURL + '/api/user/logout', {
        credentials: "include"
    });
    if (response.status === 200) {
        return response.json();
    }
    return null;
}