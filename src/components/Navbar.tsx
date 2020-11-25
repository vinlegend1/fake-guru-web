import { Box, Button, ButtonGroup, Hidden } from '@material-ui/core'
import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import { AuthContext } from '../context/authContext';
import { callLogout } from '../utils/authFunctions';
import { TypicalMessageResponse } from '../types';

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
                <>
                    <Hidden xsDown>
                        <Box display="flex" alignItems="center" bgcolor="text.secondary" px={5}>
                            <Box mr="auto"><h3>Fake Guru</h3></Box>
                            <Box>fwhoih</Box>
                            <Box ml="auto">
                                <ButtonGroup aria-label="Login or Register" size="small" variant="contained">
                                    <Button color="primary" onClick={e => handleClick(e, "login")}>Login</Button>
                                    <Button color="secondary" onClick={e => handleClick(e, "register")} > Register</Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    </Hidden>
                    <Hidden smUp>
                        <Box display="flex" alignItems="center">
                            Navbar
                </Box>
                    </Hidden>
                </>
                :
                <>
                    <Hidden xsDown>
                        <Box display="flex" alignItems="center" bgcolor="text.secondary" px={5}>
                            <Box mr="auto"><h3>Fake Guru</h3></Box>
                            <Box ml="auto">
                                <ButtonGroup aria-label="Login or Register" size="small" variant="contained">
                                    <Button color="secondary" onClick={e => handleClick(e, "logout")} > Logout</Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    </Hidden>
                    <Hidden smUp>
                        <Box display="flex" alignItems="center">
                            Navbar
                </Box>
                    </Hidden>
                </>
            }
        </>
    )
}

export default Navbar
