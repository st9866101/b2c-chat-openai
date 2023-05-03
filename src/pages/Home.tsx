import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ImageList from '../components/ImageList';

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
            <Grid container spacing={4} style={{ margin: '1rem 0' }}>

                <ImageList />
                {/* {Array.from({ length: 8 }).map((_, index) => (
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
                ))} */}

            </Grid>
            <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    東祺機電工業股份有限公司
                </Typography>
                <Divider style={{ margin: '0,4' }} />

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">
                            公司地址：
                        </Typography>
                        <Typography>
                            11075台北市信義區虎林街164巷36號2樓
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">
                            聯繫方式：
                        </Typography>
                        <Typography>
                            電話號碼：02-87809658 . 03-4514268
                        </Typography>
                        <Typography>
                            傳真號碼：02-87809657
                        </Typography>
                        <Link to="mailto:" target="_blank" rel="noopener noreferrer">
                            <Typography>
                                Email：
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            營業項目：
                        </Typography>
                        <Typography>
                            東棋油壓電梯、東棋特殊電梯、熊牌客貨梯、乘客電梯、載貨電梯、送菜梯、汽車升降梯、油壓電梯、油壓工作台、樓高外牆洗窗機、停車設備、自動垂直系統設備、電梯零組件
                        </Typography>
                    </Grid>
                </Grid>
                <section className="section">
                    <div className="container">
                        <h3 className="title">公司簡介</h3>
                        <p>
                            東祺機電工業股份有限公司自1976年成立以來,一直秉持"服務至上","產品至上"及"品質至上"的經營理念,我們一直保持與國外優秀廠商建立合作關係,在日商熊牌電子公司與金子公司合作之下,藉由高科技的引進及經驗的累積,本公司提供顧客完整的銷售服務,從設計、製造、安裝、試車、維修,一貫專業的營運方式,以滿足顧客需求。
                        </p>
                        <p>
                            致力於客梯、客貨梯、汽車升降機及自動垂直載送系統設備等。
                        </p>
                    </div>
                </section>

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


                <section className="section">
                    <div className="container">
                        <h3 className="title">分公司／經銷商</h3>
                        <ul>
                            <li>
                                <strong>高雄公司</strong> 高雄市左營區文恩路133號之1
                                <br />
                                TEL: 07-3430035
                            </li>
                            <li>
                                <strong>台中公司</strong> 台中市建國南路二段152號9樓之1
                                <br />
                                TEL: 04-22621735
                            </li>
                            <li>
                                <strong>宜蘭公司</strong> 宜蘭縣冬山鄉義成路一段33號
                                <br />
                                TEL: 0912-409273
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h3 className="title">營業時間</h3>
                        <p>週一至週五 上午8點半-下午5點半</p>
                    </div>
                </section>
            </Box>
        </Container>
    );
}

export default Home;