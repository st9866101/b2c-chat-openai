import { Box, Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    title: {
        margin: theme.spacing(2, 0),
        textAlign: 'center',
    },
    link: {
        margin: theme.spacing(1),
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box>
                <Typography variant="h3" component="h1" className={classes.title}>
                    歡迎!!
                </Typography>
                <Typography variant="body1">
                    這是一個使用 React 和 React Router 構建的簡單電商平台
                </Typography>
            </Box>
            {/* <Box>
                <Button component={Link} to="/login" variant="contained" color="primary" className={classes.link}>
                    登入
                </Button>
                <Button component={Link} to="/products" variant="contained" color="primary" className={classes.link}>
                    查看產品
                </Button>
                <Button component={Link} to="/cart" variant="contained" color="primary" className={classes.link}>
                    查看購物車
                </Button>
            </Box>
            <Typography variant="body2" align="center">
                點擊頁面上方的連結，進行導航。
            </Typography> */}
        </Container>
    );
}

export default Home;
