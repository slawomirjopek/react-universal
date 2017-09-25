import express from "express";

const app = express();
app.set("port", 3000);
app.set("view engine", "ejs");

// start server
app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(`==> Server failed error: ${err}`);
    }

    console.info(`==> Server is listening, go to http://localhost:${app.get("port")}`)
});
