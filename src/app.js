const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const routes = require('./routes');

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieSession({
        name: 'session',
        secret: process.env.SECRET,
        maxAge: 24 * 60 * 60 * 1000,
    }));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

app.use(routes);

module.exports = app;
