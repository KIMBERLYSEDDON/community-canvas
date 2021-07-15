const path = require('path');
const express = require('express');
const session = require('session');
const exphbs = require('exphbs');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('sequelize');
const SequelizeStore = require('SequelizeStore');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: process.env.secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handleabrs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.AsyncQueueError({ force: false }).then(() =>{
    app.listen(PORT, () => console.log('Now listening on port: ' + PORT));
});