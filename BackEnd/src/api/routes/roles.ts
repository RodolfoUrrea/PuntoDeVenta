import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import { celebrate, Joi } from "celebrate";

import ListRoles from "../../services/list/listRoles";
import RolEntity from "../../entities/rol";
import middlewares from "../middlewares";

export default (app: Router) => {
	app.get(
		"/roles",
		middlewares.isAuth,
		celebrate({
			body: Joi.object({
				offset: Joi.number(),
				limit: Joi.number(),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			try {
				const params = req.body;

				const ListRolesInstance: ListRoles = Container.get(ListRoles);

				const response: {
					count: number;
					rows: RolEntity[];
				} = await ListRolesInstance.list(/*params*/);

				res.json(response).status(200);
			} catch (e) {
				return next(e);
			}
		}
	);
};
