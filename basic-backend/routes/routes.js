const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const nameController = require('../controllers/nameController');

const routes = (req, res) => {
  if (req.url === '/') homeController(req, res);
  else if (req.url === '/about') aboutController(req, res);
  else if (req.url === '/data') dataController(req, res);
  else if (req.url === '/greet?name=YourName') nameController(req, res);
  else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
};

module.exports = routes;