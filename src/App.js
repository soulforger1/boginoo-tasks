import React from 'react';
import { HomeDefault, LogIn, SignOut, Recover, History, Result, Shortened } from './pages';
import { Provider } from './provider/react-provider'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';
import { ReDirect } from './components/redirect';

const App = () => {
    return (
        <Router>
            <Provider>
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
                    <Route path="/shortened">
                        <Shortened />
                    </Route>
                    <Route path="*" >
                        <ReDirect />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    )
}

export default App;