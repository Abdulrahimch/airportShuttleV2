import { AppBar, Box, Toolbar } from '@material-ui/core';
import ClientHeader from './ClientHeader/ClientHeader';

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