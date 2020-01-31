const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearhController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs' , DevController.store );

routes.get('/search', SearhController.index);

module.exports = routes;