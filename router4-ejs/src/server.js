import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Express from "express";
import path from "path";
import React from 'react';
import Template from "./containers/Template";

// initialize server & config
const app = Express();
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(Express.static(path.join(__dirname, '')));

// universal routing and rendering
app.get("*", (req, res) => {
    let status = 200;
    const context = {};

    // context.url will contain the URL if a <Redirect> was used
    if (context.url) {
        return res.redirect(302, context.url);
    }

    if (context.is404) {
        status = 404;
    }

    let markup = renderToString(
        <Router location={req.url} context={context}>
            <Template/>
        </Router>,
    );

    return res.status(status).render("index", { markup });
});

// start server
app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(`==> Server failed error: ${err}`);
    }

    console.info(`==> Server is listening, go to http://localhost:${app.get("port")}`)
});
