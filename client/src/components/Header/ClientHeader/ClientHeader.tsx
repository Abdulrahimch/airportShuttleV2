import { useState } from 'react';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@material-ui/core';

const englishTabs = [
                        { label: 'new reservations', to: '/new-reservation' },
                        { label: 'reservations', to: '/reservation' },
                        { label: 'payments', to: '/payment' }
                    ];
const turkishTabs = [
                        { label: 'yeni rezervasyonlar', to: '/new-reservation' },
                        { label: 'rezervasyonlar', to: '/reservation' },
                        { label: 'finans', to: '/payment' }
                    ]




function ClientHeader(): JSX.Element {
    const classes = useStyles();
    let lan = 'tr';

    function tabFormation() {
        if (lan === 'tr'){
            return turkishTabs.map(({ label, to }) => (
                <Tab
                    label={label}
                    component={Link}
                    to={to}
                    className={classes.tabs}
                />
            ));
        }
        else {
            return englishTabs.map(({ label, to }) => (
                <Tab
                    label={label}
                    component={Link}
                    to={to}
                    className={classes.tabs}
                />
            ));
        }
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
        </Box>
    )
}

export default ClientHeader;