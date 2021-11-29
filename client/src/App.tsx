import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListReservations from './pages/ClientReservations/ListReservations';
import ClientPayment from './pages/ClientPayment/ClientPayment';
import AddReservation from './pages/ClientReservations/AddReservation/AddReservation';
import { AuthProvider } from './context/useAuthContext';
import AddClient from './pages/Agency/AddClient/AddClient';
import { SnackBarProvider } from './context/useSnackbarContext';
import { LanguageProvider } from './context/useLanguageContext';

import './App.css';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';


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
                            </Switch>
                        </LanguageProvider>
                </AuthProvider>
            </SnackBarProvider>
        </BrowserRouter>
    )
}

export default App;