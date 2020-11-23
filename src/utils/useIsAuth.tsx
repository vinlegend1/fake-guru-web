import { useRouter } from "next/router";
import { useEffect } from "react";
import { callMeRequest } from "./authFunctions";

export const useIsAuth = async () => {
    const isAuth = await callMeRequest();
    const router = useRouter();
    if (!isAuth) {
        router.replace("/login");
    } else {
        const { username, email, id } = isAuth;
        const router = useRouter();
        useEffect(() => {
            if (!username || !email || !id) {
                router.replace("/login");
            }
        }, [username, email, id]);

    }
};