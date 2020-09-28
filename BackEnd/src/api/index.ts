import { Router } from "express";
import users from "./routes/users";
import roles from "./routes/roles";
import auth from "./routes/auth";

export default () => {
	const app = Router();

	users(app);
	roles(app);
	auth(app);

	return app;
};
