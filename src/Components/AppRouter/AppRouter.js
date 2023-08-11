import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePostForm from '../InputForm/CreatePostForm';
import Home from '../Home/Home';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/create-post" component={CreatePostForm} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
