const express = require('express');
const routes = express.Router();

const ContactController = require('./Controllers/ContactController');
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

module.exports = routes