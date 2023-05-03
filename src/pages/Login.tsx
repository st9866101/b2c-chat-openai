import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

type Props = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    DefaultUser: string,
    DefaultPS: string
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f1f1f1',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
        margin: theme.spacing(2),
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    },
    input: {
        margin: theme.spacing(1),
        width: '100%',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f1f1f1',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#333',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#333',
        },
        '& .MuiOutlinedInput-input': {
            padding: '10px',
        },
    },
    submitButton: {
        margin: theme.spacing(2, 0),
        width: '100%',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#555',
        },
    },
    title_black: {
        color: 'black'
    },
}));

function Login({ setIsLoggedIn, DefaultUser
    , DefaultPS, }: Props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username === DefaultUser && password === DefaultPS) {
            navigate('/products');
            setIsLoggedIn(true);
        }
        else {
            alert('帳號密碼錯誤')
        }
    };

    return (
        <Container className={classes.container}>
            <Box>
                <Typography variant="h3" component="h1" className={classes.title_black}>
                    帳號登入
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
