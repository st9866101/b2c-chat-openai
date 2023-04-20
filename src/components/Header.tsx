import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

type Props = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    isLoggedIn: boolean
};
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0 1rem',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawer: {
        width: 250,
    },
}));

function Header({ isLoggedIn, setIsLoggedIn }: Props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={isDrawerOpen}
                            onClose={handleDrawerClose}
                        >
                            <List className={classes.drawer}>

                                <ListItem button component={Link} to="/products" onClick={handleDrawerClose}>
                                    <ListItemText primary="產品頁" />
                                </ListItem>
                                <Divider />

                                {isLoggedIn ?
                                    <ListItem button component={Link} to="/cart" onClick={handleDrawerClose}>
                                        <ListItemText primary="查看購物車" />

                                    </ListItem>
                                    :
                                    <ListItem button component={Link} to="/login" onClick={handleDrawerClose}>
                                        <ListItemText primary="登入" />
                                    </ListItem>
                                }
                                {isLoggedIn && <ListItem button component={Link} to="/" onClick={() => {
                                    setIsLoggedIn(false)
                                }}>
                                    <ListItemText primary="登出" />
                                </ListItem>

                                }
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <>

                        <Typography variant="h6">
                            <Link to="/products" className={classes.link}>
                                產品頁
                            </Link>
                        </Typography>
                        <Typography variant="h6">
                            {isLoggedIn ?
                                <Link to="/cart" className={classes.link}>
                                    查看購物車
                                </Link>
                                :
                                <Link to="/login" className={classes.link}>
                                    登入
                                </Link>
                            }</Typography>
                        <Typography variant="h6">
                            {isLoggedIn && <Link to="/" className={classes.link} onClick={() => {
                                setIsLoggedIn(false)
                            }}>
                                登出
                            </Link>}
                        </Typography>
                        {/* <Typography variant="h6">
                            <Link to="/readme" className={classes.link} >
                                個人資料
                            </Link>
                        </Typography> */}
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
