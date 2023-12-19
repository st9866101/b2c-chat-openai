
import { Container, Grid, Typography, Card, CardContent, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const fakeStockData = [
    { id: 1101, name: '台泥', price: 40.5, change: 0.3 },
    { id: 2330, name: '台積電', price: 600, change: -5 },
    { id: 2454, name: '聯發科', price: 850, change: 2.5 },
    { id: 2317, name: '鴻海', price: 120, change: 1.2 },
    { id: 1301, name: '台塑', price: 110, change: -0.8 },
    { id: 2311, name: '日月光', price: 55, change: 0.6 },
    { id: 2892, name: '第一金', price: 15.5, change: -0.2 },
    { id: 1216, name: '統一', price: 72, change: 1.8 },
];

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                股票
            </Typography>
            <Grid container spacing={4} style={{ margin: '1rem 0' }}>
                {fakeStockData.map((stock) => (
                    <Grid item key={stock.id} xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                                    {stock.name} ({stock.id})
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardContent}>
                                    目前價格: ${stock.price.toFixed(2)}
                                </Typography>
                                <Typography variant="body2"
                                    style={{ color: stock.change >= 0 ? 'red' : 'green' }}
                                >

                                    漲跌: {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                                </Typography>
                                <Divider style={{ margin: '8px 0' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;