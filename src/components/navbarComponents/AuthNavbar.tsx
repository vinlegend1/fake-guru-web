import { Hidden, Box, ButtonGroup, Button, IconButton } from '@material-ui/core'
import { Dashboard, GridOn, FiberNew, Whatshot, Search } from '@material-ui/icons'
import React from 'react'

interface Props {
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => Promise<void>,
}

const AuthNavbar: React.FC<Props> = ({ handleClick }) => {
    return (
        <>
            <Hidden xsDown>
                <Box display="flex" alignItems="center" bgcolor="text.secondary" px={5}>
                    <Box mr="auto"><h3>Fake Guru</h3></Box>
                    <Box>
                        <IconButton size="medium" title="Home" onClick={e => handleClick(e, "home")} >
                            <Dashboard fontSize="large" color="action" />
                        </IconButton>
                        <IconButton size="medium" title="Boards" onClick={e => handleClick(e, "boards")} >
                            <GridOn fontSize="large" color="action" />
                        </IconButton>
                        <IconButton size="medium" title="Latest relevant posts" onClick={e => handleClick(e, "latest")} >
                            <FiberNew fontSize="large" color="action" />
                        </IconButton>
                        <IconButton size="medium" title="Popular posts" onClick={e => handleClick(e, "popular")} >
                            <Whatshot fontSize="large" color="action" />
                        </IconButton>
                        <IconButton size="medium" title="Search posts" onClick={e => handleClick(e, "search")} >
                            <Search fontSize="large" color="action" />
                        </IconButton>
                    </Box>
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
    )
}

export default AuthNavbar
