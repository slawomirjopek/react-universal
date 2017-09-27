import { renderToString } from "react-dom/server";
import { StaticRouter as Router, matchPath } from 'react-router-dom';
import Express from "express";
import React from "react";
import Routes from "../client/routes/routes";
import Template from "../client/containers/Template";

const app = Express();
app.use("/dist", Express.static("./dist"));
app.use("/assets", Express.static("./dist/assets"));

app.get('*', (req, res) => {
    // match request url to our React Router paths and grab component
    let { path, component } = Routes.routes.find((route) => {
        return matchPath(req.url, {
            path: route.path,
            exact: route.exact,
            component: route.component
        });
    }) || {};

    // safety check for valid component, if no component we initialize an empty shell.
    if (!component) component = {};

    //context is used by react router, empty by default
    let context = {};
    const html = renderToString(
        <Router context={context} location={req.url}>
            <Template/>
        </Router>,
    );

    res.send(renderFullPage(html));
});

const port = process.env.PORT || 9001;
app.listen(port, (req, res) => {
    console.log('app running on localhost:' + port);
});

function renderFullPage(html) {
    return `
    <!doctype html>
    <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React router4 universal app</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="/dist/assets/app.bundle.js"></script>
    </body>
    </html>
    `
}