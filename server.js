// imports path libary
const path = require('path');
// imports express libary
const express = require('express');
// imports express-session libary
const session = require('express-session');
// imports express-handlebars libary
const exphbs = require('express-handlebars');
// imports the routes from the controllers folder
const routes = require('./controllers');
// imports the helper fucntion from the utils folder
const helpers = require('./utils/helpers');

// imports the connection to the database
const sequelize = require('./config/connection');
// Store a users session(cookies)
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creates app
const app = express();
// sets port to 3001 or first avaiable port
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// sets up cookies so they can be used in app
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

// tells app what to use inorder to function as intended
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// connects app to database then starts server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
