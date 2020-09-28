export default {
	port: parseInt(process.env.PORT, 10) || 4000,

	/**
	 * Prefix Routes
	 */
	api: {
		prefix: "/api",
	},

	/*
	 * MySql Connection
	 */
	database: {
		host: "localhost",
		user: "root",
		password: "A6R7u5c6",
		database: "punto_de_venta",
		port: 3306,
	},

	/**
	 * Used by winston logger
	 */
	logs: {
		level: process.env.LOG_LEVEL || "silly",
	},

	/**
	 * Token
	 */
	token: {
		secretKey: "NgYHx8#mSnk-BAN",
		expirationTime: "1000h",
	},
};
