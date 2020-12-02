import { NextRouter } from "next/router";
import { User } from "../../types";
import { callMeRequest } from "../authFunctions";

interface UseIsAuthReturnType {
    isAuth: boolean;
    user: User | null;
}

export const useIsAuth = async (router: NextRouter): Promise<UseIsAuthReturnType> => {
    const isAuth = await callMeRequest();

    if (isAuth == null) {
        router.replace('/');
        return {
            isAuth: false,
            user: null
        };
    } else {
        return {
            isAuth: true,
            user: isAuth
        };;
    }
};