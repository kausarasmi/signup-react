
import * as React from 'react';

import Sheet from '@mui/joy/Sheet';
import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Input, Stack, Typography } from '@mui/joy';

export default function Signup() {
    return (

        <Box sx={{ minHeight: "100vh", display: "flex", justifycontent: "center", backgroundColor: "wheat", margin: "0px", padding: 0 }}>
            <Grid container md={12}>
                <Grid item md={6}>
                    <Login />
                </Grid>
                <Grid item md={6}>
                    <SignupForm />
                </Grid>
            </Grid>
        </Box>
    );
}
function Login() {
    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <Stack direction="column" spacing={2} marginX={3} paddingX={5} paddingTop="25px">
            <Typography variant='solid' fontSize={25} textAlign="center" >
                Login
            </Typography>
            <form onSubmit={handleSubmit((e) => { console.log(e) })
            }>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Enter your email address" type="email" />

                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Enter your Password address" type="password" />

                </FormControl>
                <Button variant='solid' color="success">Submit</Button>
            </form>
        </Stack>
    )
}
function SignupForm() {
    return (
        <Stack direction="column" spacing={2} marginX={3} paddingX={5} paddingTop="25px" autocomplete="off">
            <Typography variant='solid' fontSize={25} textAlign="center" >
                SignUp
            </Typography>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter your first name" type="text" />

            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" type="text" />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter your email address" type="email" />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input autocomplete="off" placeholder="Enter your Password here..." type="password" />

            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input autocomplete="off" placeholder="Enter your Password here..." type="password" />

            </FormControl>
            <Button variant='solid' color="success">SignUp</Button>
        </Stack>
    )
}