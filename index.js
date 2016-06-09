'use strict';

var path      = require("path"),
	http        = require("http"),
	express     = require("express"),
	brackets    = require("brackets"),
	app         = express(),
	server      = http.createServer(app);

var PROJECTS_DIR = process.env.PROJECTS_DIR || path.join(process.env.HOME, 'Projects');
var SUPPORT_DIR = process.env.SUPPORT_DIR || path.join(process.env.HOME, '.brackets-srv');

var EDITOR_HOST = process.env.EDITOR_HOST || '0.0.0.0';
var EDITOR_PORT = process.env.EDITOR_PORT || 3000;

app.get("/", function (req, res) {
	res.send({
		name: 'sulieu-editor',
		version: '0.1.0'
	});
});

var bracketsOpts = {
	projectsDir: PROJECTS_DIR,
	supportDir: SUPPORT_DIR
};

brackets(server, bracketsOpts);

server.listen(3000);

console.log("Your application is availble at http://localhost:3000");
console.log("You can access Brackets on http://localhost:3000/brackets/");
