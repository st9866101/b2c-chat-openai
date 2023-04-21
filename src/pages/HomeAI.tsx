import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const faqList = [
    {
        id: 1,
        title: "如何註冊會員？",
        content: "請點選首頁右上方的「註冊」按鈕，填寫相關資料即可完成註冊。",
    },
    {
        id: 2,
        title: "如何修改個人資料？",
        content: "請點選首頁右上方的「個人資料」按鈕，進入個人資料頁面後即可進行修改。",
    },
    {
        id: 3,
        title: "如何聯繫客服？",
        content: "您可以透過首頁右下角的「聯繫我們」按鈕，填寫表單或是透過線上客服進行聯繫。",
    },
    {
        id: 4,
        title: "如何進行商品訂購？",
        content: "請在網站上選擇您要購買的商品，填寫相關資料後即可完成訂購。",
    },
    {
        id: 5,
        title: "如何查詢訂單狀態？",
        content: "請點選首頁右上方的「訂單查詢」按鈕，填寫訂單編號或相關資料即可查詢訂單狀態。",
    },
];

const useStyles = makeStyles((theme) => ({
    // container: {
    //     paddingTop: theme.spacing(4),
    //     paddingBottom: theme.spacing(4),
    // },
    // card: {
    //     maxWidth: 345,
    // },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    //
    // root: {
    //     paddingTop: theme.spacing(8),
    //     paddingBottom: theme.spacing(8),
    // },
    hero: {
        textAlign: 'center',
        marginBottom: theme.spacing(4),
    },
    heroTitle: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
    heroSubtitle: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(4),
    },
    container: {
        // padding: 0,
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
    cta: {
        marginTop: theme.spacing(4),
        textAlign: 'center',
    },
    ctaTitle: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
    ctaButton: {
        marginTop: theme.spacing(2),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    ctaSubtitle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    heroText: {
        fontWeight: 700, // 粗体字
        marginBottom: theme.spacing(4), // 底部外边距
        [theme.breakpoints.up("md")]: {
            marginBottom: theme.spacing(8), // 在 md 屏幕尺寸及以上的设备上增加底部外边距
        },
        textShadow: "2px 2px 2px rgba(0,0,0,0.3)", // 文字阴影
        color: theme.palette.common.black, // 文字颜色
        textTransform: "uppercase", // 文字大写
        marginTop: theme.spacing(4),
    },
}));

function Home() {
    const classes = useStyles();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
            {/*  */}
            <Box className={classes.hero} mt={2}>
                <Container maxWidth="md">
                    <Typography variant={isMobile ? "h3" : "h1"} className={classes.heroText}>
                        歡迎來到我們的網站
                    </Typography>
                    <Typography variant="h5" className={classes.heroText}>
                        我們提供最優質的產品和服務，讓您享受一流的體驗
                    </Typography>
                    <Box className={classes.cta}>
                        <Button variant="contained" color="primary" component={Link} to="/products">
                            立即購買
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Container>
                <Box my={8}>
                    <Typography variant="h3" align="center" gutterBottom>
                        關於我們
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        我們是一家專注於提供高品質產品和服務的公司，致力於為客戶提供一流的體驗。我們的產品包括但不限於電子產品、家居用品和健身器材等。我們的團隊由一群專業的技術人員和熱情的客戶服務代表組成，致力於為客戶提供最好的產品和服務。
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        我們的宗旨是提供最好的產品和服務，讓客戶享受一流的體驗。我們相信，只有通過不斷的創新和改進，才能夠實現這一目標。因此，我們不斷地優化我們的產品和服務，以滿足客戶不斷變化的需求。我們還會積極探索新的市場和商機，開發更多樣化的產品，為客戶帶來更多的選擇和價值。
                    </Typography>
                </Box>
            </Container>

            {/*  */}
            <Box >
                <Box className={classes.hero}>
                    <Typography variant="h3" className={classes.heroTitle}>
                        常見問題
                    </Typography>
                    <Typography variant="body1" className={classes.heroSubtitle}>
                        以下是我們收集整理的常見問題，如果您還有其他問題，歡迎聯繫我們的客服。
                    </Typography>
                </Box>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={4}>
                        {faqList.map((faq) => (
                            <Grid item xs={12} sm={6} md={4} key={faq.id}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="h5" className={classes.cardTitle}>
                                            {faq.title}
                                        </Typography>
                                        <Typography variant="body1" className={classes.cardContent}>
                                            {faq.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box className={classes.cta}>
                    <Typography variant="h4" className={classes.ctaTitle}>
                        立即加入我們
                    </Typography>
                    <Typography variant="body1" className={classes.ctaSubtitle}>
                        加入我們，開啟您的AI之旅！
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.ctaButton}>
                        立即註冊
                    </Button>
                </Box>

            </Box>



        </Container>
    );
}

export default Home;