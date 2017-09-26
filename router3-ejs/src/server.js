import express from "express";
import path from "path";

// initialize server & config
const app = express();
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// universal routing and rendering
app.get("*", (req, res) => {

});

// start server
app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(`==> Server failed error: ${err}`);
    }

    console.info(`==> Server is listening, go to http://localhost:${app.get("port")}`)
});
