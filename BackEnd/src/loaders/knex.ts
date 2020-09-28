import config from "../config";

export default async () => {
	const knex = require("knex")({
		client: "mysql",
		connection: config.database,
	});

	return knex;
};
