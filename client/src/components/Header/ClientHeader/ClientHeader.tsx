import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@material-ui/core';
import { tabsDictionary } from '../../../utils/dictionary';

const { englishTabs,  turkishTabs } = tabsDictionary;


function ClientHeader(): JSX.Element {
    const classes = useStyles();
    let lan = 'eng';
    let tabs = [];
    
    function tabFormation() {
        if (lan === 'tr') tabs = turkishTabs;
        else tabs = englishTabs;
        return tabs.map(({ label, to }, idx) => (
            <Tab
                key={idx}
                label={label}
                component={Link}
                to={to}
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
        </Box>
    )
}

export default ClientHeader;