import { Box, FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { TypicalMessageResponse, User } from '../types';
import { callLogin } from '../utils/authFunctions';

const Login = () => {
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const router = useRouter();
    const [_user, set_user] = useState<User>({
        username: "",
        password: ""
    });
    const [message, setMessage] = useState<TypicalMessageResponse>({
        error: false,
        msgBody: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { isAuthenticated, user } = await callLogin(_user);

        if (!isAuthenticated) {
            setMessage({
                error: true,
                msgBody: "username or password incorrect"
            });
            return;
        }
        console.log(user);
        setIsAuthenticated!(true);
        setUser!(user);

        router.push('/home');
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        set_user({
            ..._user,
            [e.target.name]: e.target.value
        });
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup color="#007bb2">
                    <FormControl>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input required onChange={handleChange} name="username" id="username" aria-describedby="username-helper" type="text" />
                        <FormHelperText id="username-helper">Enter username</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input required onChange={handleChange} name="password" id="password" aria-describedby="password-helper" type="password" />
                        <FormHelperText id="password-helper">Enter your password</FormHelperText>
                    </FormControl>
                    <Button type="submit" color="secondary" variant="contained">Login</Button>
                </FormGroup>
            </form>
            {message.error ?
                <Box style={{ color: "#ef5350" }} mt={2} >
                    {message.msgBody}
                </Box>
                : null
            }
        </Box>
    )
}

export default Login
