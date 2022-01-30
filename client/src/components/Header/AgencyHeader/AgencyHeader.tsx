import { useState } from 'react';  
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box, Menu, MenuItem } from '@material-ui/core';
import { useLanguage } from '../../../context/useLanguageContext';

function AgencyHeader(): JSX.Element {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorCleitnEl, setAnchorCleitnEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [openClient, setOpenClient] = useState<boolean>(false);
    
    const { language } = useLanguage();

    let tabs = [];

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };

    const handleClientClose = () => {
        setAnchorCleitnEl(null);
        setOpenClient(false);
    };

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    };

    const handleClientClick = (event: any) => {
        setAnchorCleitnEl(event.currentTarget);
        setOpenClient(!openClient)
    };

    const AgencyTabsDictionary = {
        englishTabs : [
            { label: 'clients ', to: '', handleClick: handleClientClick },
            { label: 'reservations', to: '/agency-reservation' },
            { label: 'payments', to: '/agency-payment' },
            { label: 'dirvers', to: '', handleClick: handleClick }
        ],
        turkishTabs : [
            { label: 'müşteriler ', to: '', handleClick: handleClientClick },
            { label: 'rezervasyonlar', to: '/agency-reservation' },
            { label: 'finans', to: '/agency-payment' },
            { label: 'sürücüler', to: '', handleClick: handleClick}
        ]
      };

    const menus = [
        {
            anchorEl: anchorEl, open: open, onClose: handleClose, 
            options: [
                { label: language === 'eng' ? 'All Drivers' : 'Sürücüler', to: 'drivers' },
                { label: language === 'eng' ? 'Add Driver' : 'Sürücü Ekle', to: 'add-driver' }
            ]
        },
        {
            anchorEl: anchorCleitnEl, open: openClient, onClose: handleClientClose, 
            options: [
                { label: language === 'eng' ? 'All Clients' : 'Sürücüler', to: 'clients' },
                { label: language === 'eng' ? 'Add Client' : 'Sürücü Ekle', to: 'add-client' }
            ],
        }  
    ];

    const { englishTabs,  turkishTabs } = AgencyTabsDictionary;
    
    function tabFormation() {
        if (language === 'tr') tabs = turkishTabs;
        else tabs = englishTabs;
        return tabs.map(({ label, to, handleClick }, idx) => (
            <Tab
                key={idx}
                label={label}
                component={Link}
                to={to}
                onClick={handleClick}
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
            {
                menus.map(({ anchorEl, open, onClose, options }) => (
                    <>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={onClose}
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
                    </>
                ))
            }
        </Box>
    )
}

export default AgencyHeader;