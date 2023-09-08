import {
    Typography,
    makeStyles,
    Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerText: {
        textAlign: 'center',
    },

    footer: {
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.grey[100],
        padding: theme.spacing(6, 0),
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Typography variant="body2" className={classes.footerText}>
                © COPYRIGHT © 2023 Vader ELECTRONICS CO., LTD.ALL RIGHTS RESERVED.V1.1
            </Typography>
        </Box>
    );
}

export default Footer;
