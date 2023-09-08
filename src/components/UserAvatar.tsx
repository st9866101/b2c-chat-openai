import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Avatar, MenuItem, Popover } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

interface Props {
    username: string;
    onLogout: () => void;
}

const useStyles = makeStyles(() =>
    createStyles({
        avatar: {
            cursor: 'pointer',
        },
    })
);

const UserAvatar: React.FC<Props> = ({ username, onLogout }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        onLogout();
        handleClose();
    };

    return (
        <div>
            <Avatar alt={username} className={classes.avatar} onClick={handleClick} />
            <Popover anchorEl={anchorEl} keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                style={{ marginTop: '5px' }}
            >
                <MenuItem onClick={handleLogout}>
                    <ExitToApp />
                </MenuItem>
            </Popover>
        </div>
    );
};

export default UserAvatar;
