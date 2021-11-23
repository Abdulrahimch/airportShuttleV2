import { AppBar, Box, Toolbar } from '@material-ui/core';
import ClientHeader from './ClientHeader/ClientHeader';
import { useAuth } from '../../context/useAuthContext';
import AgencyHeader from './AgencyHeader/AgencyHeader';

function Header(): JSX.Element {
    const { loggedInUser } = useAuth();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    {loggedInUser?.role === 'client' ?<ClientHeader /> : <AgencyHeader />}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;