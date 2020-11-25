import { FormControl, InputLabel, Input, FormHelperText, Box, FormGroup, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { callRegister } from '../utils/authFunctions';
import { TypicalMessageResponse, User } from '../types';
import { useRouter } from 'next/router';

const Register = () => {

    const router = useRouter();
    const [message, setMessage] = useState<TypicalMessageResponse>({
        error: false,
        msgBody: ""
    });
    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        email: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(user)
        // console.log('hihih')
        const { msgBody, email, error, username } = await callRegister(user) as any;

        if (error || msgBody) {
            console.log(error);
            setMessage({
                error: true,
                msgBody: "username or email already taken"
            });
            return;
        }
        console.log(email, username)
        router.push('/login')
        // console.log(thing)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup color="#007bb2">
                    <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input onChange={handleChange} name="email" id="email" aria-describedby="email-helper" type="email" />
                        <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input onChange={handleChange} name="username" id="username" aria-describedby="username-helper" type="text" />
                        <FormHelperText id="username-helper">think of a creative username</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input onChange={handleChange} name="password" id="password" aria-describedby="password-helper" type="password" />
                        <FormHelperText id="password-helper">think of a secure password</FormHelperText>
                    </FormControl>
                    <Button type="submit" color="secondary" variant="contained">Register</Button>
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

export default Register
