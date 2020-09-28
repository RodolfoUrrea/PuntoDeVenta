import fs from "fs";
import path from "path";
import { Container } from "typedi";

import { trimExtencion } from "../utils";
import LoggerInstance from "./logger";
import knexLoader from "./knex";

export default async () => {
	try {
		const knexInstance = await knexLoader();

		Container.set("logger", LoggerInstance);
		Container.set("knex", knexInstance);

		loadModels();
	} catch (e) {
		LoggerInstance.error("Error on dependency injector loader: %o", e);
		throw e;
	}
};

const loadModels = () => {
	const models: Array<any> = listModels();

	models.forEach((m) => {
		Container.set(m.name, m.model);
	});
};

const listModels = () => {
	const modelsPath: string = path.resolve(__dirname, "../../src/models");
	let models: Array<any> = [];

	fs.readdirSync(modelsPath)
		.filter((file) => {
			return (
				file.indexOf(".") !== 0 &&
				file !== "base.ts" &&
				file.slice(-3) === ".ts"
			);
		})
		.forEach((file) => {
			const requiredModel = require(path.join(modelsPath, file)).default;

			models.push({
				name: `${trimExtencion(file)}Model`,
				model: new requiredModel(),
			});
		});

	return models;
};
