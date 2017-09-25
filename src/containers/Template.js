import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "../containers/HomePage";
import ListPage from "../containers/ListPage";
import NotFoundPage from "../containers/NotFoundPage";

class Template extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container">
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

export default Template;