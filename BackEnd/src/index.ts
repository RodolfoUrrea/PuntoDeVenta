import "reflect-metadata"; // We need this in order to use @Decorators with typedi
import express from "express";
import config from "./config";

const app = express();

async function startServer() {
	await require("./loaders").default({ app });

	app.listen(config.port, (error) => {
		if (error) {
			console.error("Error al iniciar el Server");
			return;
		}
	});
}

startServer();
