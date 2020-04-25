const path = require('path');
const express = require('express');
const hbs = require('hbs');
const livereload = require("livereload");
var connectLivereload = require("connect-livereload");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectoryPath);

app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'German'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'German'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'Rendered from handlebars',
    title: 'Help',
    name: 'German'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Philadelphia',
    forecast: 'It is snowing.'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'German',
    errorMessage: 'Help article not found.'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'German',
    errorMessage: 'Page not found.'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})