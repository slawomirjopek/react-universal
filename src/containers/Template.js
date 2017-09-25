import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "../containers/HomePage";
import ListPage from "../containers/ListPage";
import Navigation from "../components/Navigation";
import NotFoundPage from "../containers/NotFoundPage";

class Template extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container">
                <header>
                    <Navigation/>
                </header>

                <div className="content-container">
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/list" component={ListPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Template;