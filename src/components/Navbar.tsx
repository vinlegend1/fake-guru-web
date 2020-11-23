import { Box, Button, ButtonGroup, Hidden } from '@material-ui/core'
import React from 'react'
import { useRouter } from 'next/router';

const Navbar: React.FC<any> = () => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => {
        e.preventDefault()
        router.push('/' + type);
    }

    return (
        <>
            <Hidden xsDown>
                <Box display="flex" alignItems="center" bgcolor="text.secondary" px={5}>
                    <Box fontSize="h3.fontSize" mr="auto">Fake Guru</Box>
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
    )
}

export default Navbar
