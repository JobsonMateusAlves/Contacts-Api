const express = require('express');
const routes = express.Router();

const ContactController = require('./Controllers/ContactController');
const DebugController = require('./Controllers/DebugController');
const UserController = require('./Controllers/UserController');

// Contatos
routes.get(     "/contacts",       UserController.authenticatorMiddlewate, ContactController.index);
routes.get(     "/contacts/:id",   UserController.authenticatorMiddlewate, ContactController.show);
routes.post(    "/contacts",       UserController.authenticatorMiddlewate, ContactController.store);
routes.put(     "/contacts/:id",   UserController.authenticatorMiddlewate, ContactController.put);
routes.delete(  "/contacts/:id",   UserController.authenticatorMiddlewate, ContactController.delete);

// User
routes.post(    "/signup",         UserController.signup);
routes.post(    "/login",          UserController.login);
routes.delete(  "/logout",         UserController.authenticatorMiddlewate, UserController.logout);

routes.get(     "/users",          UserController.index);
routes.delete(  "/users/:id",      UserController.delete);

routes.get(     "/debug", DebugController.listDebug);
routes.post(    "/debug", DebugController.debug);

module.exports = routes