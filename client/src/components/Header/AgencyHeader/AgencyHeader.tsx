import { useState } from 'react';  
import useStyles from './useStyles';
import { Tabs, Tab, Grid, Menu, MenuItem, Button } from '@material-ui/core';
import { useLanguage } from '../../../context/useLanguageContext';
import { useHistory } from 'react-router-dom';  
import LanguageTab from '../LanguageTab/LanguageTab';
import Logout from '../Logout/Logout';

function AgencyHeader(): JSX.Element {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorCleitnEl, setAnchorCleitnEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [openClient, setOpenClient] = useState<boolean>(false);
    
    const { language } = useLanguage();
    const history = useHistory();

    let tabs = [];

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };

    const handleClientClose = () => {
        setAnchorCleitnEl(null);
        setOpenClient(false);
    };

    const handleClick = (event: any, url: string) => {
        history.push(url);
        setOpen(false);
        setOpenClient(false);
    };

    const handleClickMenu = (event: any, setAnchorFunc: (event: any) => void, setOpenFunc: (value: boolean) => void) => {
        setAnchorFunc(event.currentTarget);
        setOpenFunc(true)
    };

    const AgencyTabsDictionary = {
        englishTabs : [
            { label: 'Home', handleClick: (event: any) => handleClick(event, '/agency-home') },
            { label: 'clients ', handleClick: (event: any) => handleClickMenu(event, setAnchorCleitnEl, setOpenClient) },
            { label: 'reservations', handleClick: (event: any) => handleClick(event, '/agency-reservation') },
            { label: 'payments', handleClick: (event: any) => handleClick(event, '/agency-payment') },
            { label: 'dirvers',  handleClick: (event: any) => handleClickMenu(event, setAnchorEl, setOpen) }
        ],
        turkishTabs : [
            { label: 'Home', handleClick: (event: any) => handleClick(event, '/agency-home') },
            { label: 'm????teriler ', handleClick: (event: any) => handleClickMenu(event, setAnchorCleitnEl, setOpenClient) },
            { label: 'rezervasyonlar', handleClick: (event: any) => handleClick(event, '/agency-reservation') },
            { label: 'finans', handleClick: (event: any) => handleClick(event, '/agency-payment') },
            { label: 's??r??c??ler', handleClick: (event: any) => handleClickMenu(event, setAnchorEl, setOpen)}
        ]
      };

    const menus = [
        {
            anchorEl: anchorEl, open: open, onClose: handleClose, 
            options: [
                { label: language === 'eng' ? 'All Drivers' : 'S??r??c??ler', handleClick: (event: any) => handleClick(event, 'drivers') },
                { label: language === 'eng' ? 'Add Driver' : 'S??r??c?? Ekle', handleClick: (event: any) => handleClick(event, 'add-driver') }
            ]
        },
        {
            anchorEl: anchorCleitnEl, open: openClient, onClose: handleClientClose, 
            options: [
                { label: language === 'eng' ? 'All Clients' : 'M????teriler', handleClick: (event: any) => handleClick(event, 'clients')},
                { label: language === 'eng' ? 'Add Client' : 'M????teri Ekle', handleClick: (event: any) => handleClick(event, 'add-client') }
            ],
        }  
    ];

    const { englishTabs,  turkishTabs } = AgencyTabsDictionary;
    
    function tabFormation() {
        if (language === 'tr') tabs = turkishTabs;
        else tabs = englishTabs;
        return tabs.map(({ label, handleClick }, idx) => (
            <Tab
                key={idx}
                label={label}
                onClick={handleClick}
                className={classes.tabs}
            />
        ));
    };

    return (
        <Grid container className={classes.root} >
            <Grid item>
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
                                {options.map(({label, handleClick}, idx) => (
                                <MenuItem
                                    key={idx}
                                    onClick={handleClick}
                                >
                                    {label}
                                </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ))
                }
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container>
                    <LanguageTab />
                    <Logout />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AgencyHeader;