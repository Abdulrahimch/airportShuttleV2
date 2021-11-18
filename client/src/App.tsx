import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientReservations from './pages/ClientReservations/ClientReservations';
import ClientPayment from './pages/ClientPayment/ClientPayment';

import './App.css';
import Login from './pages/Login';
import Header from './components/Header/Header';


function App (): JSX.Element {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/reservation" component={ClientReservations} />
                    <Route exact path="/payment" component={ClientPayment} />
                </Switch>
        </BrowserRouter>
    )
}

export default App;