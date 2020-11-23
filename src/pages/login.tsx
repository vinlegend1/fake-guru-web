import { Box, FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { User } from 'src/types';
import { callLogin } from '../utils/authFunctions';

const Login = () => {
    const router = useRouter();
    const [_user, setUser] = useState<User>({
        username: "",
        password: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('hihih')
        const { isAuthenticated, user } = await callLogin(_user);

        if (!isAuthenticated) {
            return;
        }
        console.log(user);
        router.push('/home');
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        setUser({
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
                        <Input onChange={handleChange} name="username" id="username" aria-describedby="username-helper" type="text" />
                        <FormHelperText id="username-helper">Enter username</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input onChange={handleChange} name="password" id="password" aria-describedby="password-helper" type="password" />
                        <FormHelperText id="password-helper">Enter your password</FormHelperText>
                    </FormControl>
                    <Button type="submit" color="secondary" variant="contained">Login</Button>
                </FormGroup>
            </form>
        </Box>
    )
}

export default Login
