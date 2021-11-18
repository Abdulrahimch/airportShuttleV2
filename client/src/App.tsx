import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App (): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;