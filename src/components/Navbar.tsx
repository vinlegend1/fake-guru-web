import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import { AuthContext } from '../context/authContext';
import { callLogout } from '../utils/authFunctions';
import { TypicalMessageResponse } from '../types';
import UnAuthNavbar from './navbarComponents/UnAuthNavbar';
import AuthNavbar from './navbarComponents/AuthNavbar';

const Navbar: React.FC<any> = () => {
    const router = useRouter()
    const { isAuthenticated, setUser, setIsAuthenticated } = useContext(AuthContext);
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => {
        e.preventDefault()
        if (type === "logout") {
            const returnedAfterLogout = (await callLogout()) as TypicalMessageResponse;
            if (!returnedAfterLogout) {
                return;
            }
            setUser!(null);
            setIsAuthenticated!(false);
            router.replace('/');
            return;
        }
        router.push('/' + type);
    }

    return (
        <>
            { !isAuthenticated ?
                <UnAuthNavbar handleClick={handleClick} /> :
                <AuthNavbar handleClick={handleClick} />
            }
        </>
    )
}

export default Navbar
