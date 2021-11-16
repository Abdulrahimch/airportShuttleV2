import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Header from './components/Header/Header';


function App (): JSX.Element {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
        </BrowserRouter>
    )
}

export default App;