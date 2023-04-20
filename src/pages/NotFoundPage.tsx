import { Grid } from '@material-ui/core';
function NotFoundPage() {
    return (<Grid container
        spacing={2}
        justifyContent='center'
        alignItems="center"
        style={{ height: 'calc(100% - 4rem)', padding: '2rem' }}>
        <h1>404 - Not Found !!!</h1>

    </Grid>
    );
}

export default NotFoundPage;