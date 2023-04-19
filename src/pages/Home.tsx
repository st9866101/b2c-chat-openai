import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                歡迎!!
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                這是一個使用 React 和 React Router 構建的簡單電商平台
            </Typography>
            <Grid container spacing={4}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://picsum.photos/seed/${index + 1}/400/400`}
                                    title="Product Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Product {index + 1}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Description of product {index + 1}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;