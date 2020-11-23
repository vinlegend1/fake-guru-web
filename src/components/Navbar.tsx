import { Box, Button, ButtonGroup, Hidden } from '@material-ui/core'
import React from 'react'

const Navbar: React.FC<any> = () => {
    return (
        <>
            <Hidden xsDown>
                <Box display="flex" alignItems="center" bgcolor="info.main" px={5}>
                    <Box fontSize="h3.fontSize" mr="auto">Fake Guru</Box>
                    <Box>fwhoih</Box>
                    <Box ml="auto">
                        <ButtonGroup aria-label="Login or Register" size="small" variant="contained">
                            <Button color="primary">Login</Button>
                            <Button color="secondary">Register</Button>
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
