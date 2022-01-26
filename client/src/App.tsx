import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListReservations from './pages/ClientReservations/ListReservations';
import ClientPayment from './pages/ClientPayment/ClientPayment';
import AddReservation from './pages/ClientReservations/AddReservation/AddReservation';
import { AuthProvider } from './context/useAuthContext';
import AddClient from './pages/Agency/AddClient/AddClient';
import { SnackBarProvider } from './context/useSnackbarContext';
import { LanguageProvider } from './context/useLanguageContext';
import ListAgencyReservations from './pages/Agency/Reservation/ListAgencyReservations';
import AgencyPayments from './pages/Agency/Payments/AgencyPayments';

import './App.css';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import ListDrivers from './pages/Agency/Drivers/ListDrivers/ListDrivers';
import AddDriver from './pages/Agency/Drivers/AddDriver/AddDriver';


function App (): JSX.Element {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <AuthProvider>
                    <LanguageProvider>
                        <Header />
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/reservation" component={ListReservations} />
                                <Route exact path="/payment" component={ClientPayment} />
                                <Route exact path="/new-reservation" component={AddReservation} />
                                <Route exact path="/add-client" component={AddClient} />
                                <Route exact path="/agency-reservation" component={ListAgencyReservations} />
                                <Route exact path="/agency-payment" component={AgencyPayments} />
                                <Route exact path="/drivers" component={ListDrivers} />
                                <Route exact path="/add-driver" component={AddDriver} />
                            </Switch>
                        </LanguageProvider>
                </AuthProvider>
            </SnackBarProvider>
        </BrowserRouter>
    )
}

export default App;