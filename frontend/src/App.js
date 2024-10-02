import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/customers" component={Customers} />
            </Switch>
        </Router>
    );
}

export default App;
