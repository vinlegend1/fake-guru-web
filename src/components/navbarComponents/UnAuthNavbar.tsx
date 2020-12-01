import { Hidden, Box, ButtonGroup, Button } from '@material-ui/core'
import React from 'react'

interface Props {
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => Promise<void>
}

const UnAuthNavbar: React.FC<Props> = ({ handleClick }) => {
    return (
        <>
            <Hidden xsDown>
                <Box display="flex" alignItems="center" bgcolor="text.secondary" px={5}>
                    <Box mr="auto"><h3>Fake Guru</h3></Box>
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

export default UnAuthNavbar