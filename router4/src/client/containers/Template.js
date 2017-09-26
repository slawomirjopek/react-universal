import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";

import Footer from "../components/template/Footer";
import Header from "../components/template/Header";
import Home from "../containers/Home";
import Users from "../containers/Users";

class Template extends Component {
    render() {
        return (
            <div className="page-container">
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/users" component={Users}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
};

export default Template;
