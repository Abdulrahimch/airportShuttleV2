import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientReservations from './pages/ClientReservations/ClientReservations';
import ClientPayment from './pages/ClientPayment/ClientPayment';
import NewReservation from './pages/NewReservation/NewReservation';
import { AuthProvider } from './context/useAuthContext';
import AddClient from './pages/Agency/AddClient/AddClient';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';


function App (): JSX.Element {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <AuthProvider>
                    <Header />
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/reservation" component={ClientReservations} />
                            <Route exact path="/payment" component={ClientPayment} />
                            <Route exact path="/new-reservation" component={NewReservation} />
                            <Route exact path="/add-client" component={AddClient} />
                        </Switch>
                </AuthProvider>
            </SnackBarProvider>
        </BrowserRouter>
    )
}

export default App;