import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@material-ui/core';
import { tabsDictionary } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';

const { englishTabs,  turkishTabs } = tabsDictionary;


function ClientHeader(): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    let tabs = [];
    
    function tabFormation() {
        if (language === 'tr') tabs = turkishTabs;
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