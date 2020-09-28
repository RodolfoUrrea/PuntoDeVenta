import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import { celebrate, Joi } from "celebrate";

import SignIn from "../../services/auth/signIn";
import UserEntity from "../../entities/user";

export default (app: Router) => {
	app.post(
		"/signIn",
		celebrate({
			body: Joi.object({
				email: Joi.string().email().required(),
				password: Joi.string().required(),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			try {
				const params = req.body;

				const signInInstance: SignIn = Container.get(SignIn);
				const response: {
					user: UserEntity;
					token: string;
				} = await signInInstance.signIn(params);

				res.json(response).status(200);
			} catch (e) {
				return next(e);
			}
		}
	);
};
