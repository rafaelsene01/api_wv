const express = require("express");

const PostController = require("./controllers/PostController");

const routes = new express.Router();

routes.post("/", PostController.store);
routes.get("/", PostController.index);
routes.delete("/:_id", PostController.delete);

module.exports = routes;
