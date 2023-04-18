import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
        margin: theme.spacing(2),
    },
    input: {
        margin: theme.spacing(1),
    },
    submitButton: {
        margin: theme.spacing(2, 0),
    },
}));

function Login() {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`username: ${username}, password: ${password}`);
        // 執行登入邏輯
    };

    return (
        <Container className={classes.container}>
            <Box>
                <Typography variant="h3" component="h1">
                    登入
                </Typography>
            </Box>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    label="用戶名"
                    variant="outlined"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className={classes.input}
                />
                <TextField
                    label="密碼"
                    variant="outlined"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={classes.input}
                />
                <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
                    登入
                </Button>
            </form>
        </Container>
    );
}

export default Login;
