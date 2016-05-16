import * as express from "express";
import * as index from '../controllers/index.server.controller';

export default (app) => {
	app.route("*")
		.get(index.render);
};