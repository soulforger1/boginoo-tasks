import React from 'react';
import { HomeDefault, LogIn, SignOut, Recover, History, Result } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/logIn">
                    <LogIn />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
                <Route path="/recover">
                    <Recover />
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;