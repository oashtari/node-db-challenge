const express = require('express');

const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router');

const server = express();

server.use(helmet());

server.use(express.json());

server.use('/api/projects', ProjectsRouter); // NEED TO EDIT

module.exports = server;