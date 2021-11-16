import { AppBar, Box, Toolbar, Tabs, Tab } from '@material-ui/core';
import ClientHeader from './ClientHeader/ClientHeader';
import DataTable from '../DataTable/DataTable';

function Header(): JSX.Element {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <ClientHeader />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;