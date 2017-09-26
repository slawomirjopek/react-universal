import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";

import Footer from "../components/template/Footer";
import Header from "../components/template/Header";
import Routes from "../routes/routes";

class Template extends Component {
    render() {
        let routes = Routes.routes.map((route, index) =>
            <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
        );

        return (
            <div className="page-container">
                <Header/>
                <Switch>
                    {routes}
                </Switch>
                <Footer/>
            </div>
        )
    }
};

export default Template;
