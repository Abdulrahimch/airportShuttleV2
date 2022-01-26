import { useState } from 'react';  
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box, Menu, MenuItem } from '@material-ui/core';
import { useLanguage } from '../../../context/useLanguageContext';

function AgencyHeader(): JSX.Element {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const { language } = useLanguage();

    const options = [
        { label: language === 'eng' ? 'All Drivers' : 'Sürücüler', to: 'drivers' },
        { label: language === 'eng' ? 'Add Driver' : 'Sürücü Ekle', to: 'add-driver' }
    ];

    let tabs = [];

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
      };

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    }

    const AgencyTabsDictionary = {
        englishTabs : [
            { label: 'add client', to: '/add-client' },
            { label: 'reservations', to: '/agency-reservation' },
            { label: 'payments', to: '/agency-payment' },
            { label: 'dirvers', to: '', handleClick: handleClick}
        ],
        turkishTabs : [
            { label: 'müşteri ekle ', to: '/add-client' },
            { label: 'rezervasyonlar', to: '/agency-reservation' },
            { label: 'finans', to: '/agency-payment' },
            { label: 'sürücüler', to: '', handleClick: handleClick}
        ]
      };

    const { englishTabs,  turkishTabs } = AgencyTabsDictionary;
    
    function tabFormation() {
        if (language === 'tr') tabs = turkishTabs;
        else tabs = englishTabs;
        return tabs.map(({ label, to }, idx) => (
            <Tab
                key={idx}
                label={label}
                component={Link}
                to={to}
                onClick={(event: any) => handleClick(event)}
                className={classes.tabs}
            />
        ));
    };

    return (
        <Box className={classes.root}>
            <Tabs
                aria-label="wrapped label tabs example"
                TabIndicatorProps={{
                    style: {
                        display: "none",
                    },
                }}
            >
                {tabFormation()}
            </Tabs>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox',
                }}
            >
                {options.map(({label, to}, idx) => (
                <MenuItem
                    key={idx}
                    component={Link}
                    to={to}
                >
                {label}
                </MenuItem>
            ))}
      </Menu>
        </Box>
    )
}

export default AgencyHeader;