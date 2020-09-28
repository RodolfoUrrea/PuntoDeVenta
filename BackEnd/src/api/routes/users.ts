import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import { celebrate, Joi } from "celebrate";

import ListUsers from "../../services/list/listUsers";
import CreateUser from "../../services/create/createUser";
import UpdateUser from "../../services/update/updateUser";
import DeleteUser from "../../services/delete/deleteUser";

import UserEntity from "../../entities/user";
import middlewares from "../middlewares";

export default (app: Router) => {
	app.get(
		"/users",
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

				const ListUsersInstance: ListUsers = Container.get(ListUsers);

				const response: {
					count: number;
					rows: UserEntity[];
				} = await ListUsersInstance.list(/*params*/);

				res.json(response).status(200);
			} catch (e) {
				return next(e);
			}
		}
	);

	app.post(
		"/addUser",
		middlewares.isAuth,
		celebrate({
			body: Joi.object({
				name: Joi.string().required(),
				last_name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().required(),
				id_rol: Joi.number().required(),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			try {
				const params = req.body;

				const CreateUserInstance: CreateUser = Container.get(CreateUser);
				const response: UserEntity = await CreateUserInstance.create(params);

				res.json(response).status(200);
			} catch (e) {
				return next(e);
			}
		}
	);

	app.post(
		"/updateUser",
		middlewares.isAuth,
		celebrate({
			body: Joi.object({
				id_user: Joi.number().required(),
				name: Joi.string().required(),
				last_name: Joi.string().required(),
				email: Joi.string().email().required(),
				id_rol: Joi.number().required(),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			try {
				const params = req.body;

				const UpdateUserInstance: UpdateUser = Container.get(UpdateUser);
				const response: UserEntity = await UpdateUserInstance.update(params);

				res.json(response).status(200);
			} catch (e) {
				return next(e);
			}
		}
	);

	app.post(
		"/deleteUser",
		middlewares.isAuth,
		celebrate({
			body: Joi.object({
				id_user: Joi.number().required(),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			try {
				const params = req.body;

				const DeleteUserInstance: DeleteUser = Container.get(DeleteUser);
				await DeleteUserInstance.delete(params.id_user);

				res.json().status(200);
			} catch (e) {
				return next(e);
			}
		}
	);
};
