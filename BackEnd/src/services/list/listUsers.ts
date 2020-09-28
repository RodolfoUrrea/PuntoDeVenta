import { Service, Inject } from "typedi";

import UserRepository from "../../repositories/users";
import User from "../../entities/user";

@Service()
export default class ListUsers {
	constructor(
		@Inject("usersModel") private usersModel: UserRepository,
		@Inject("logger") private logger
	) {}

	public async list(): Promise<{ count: number; rows: User[] }> {
		const response: {
			count: number;
			rows: User[];
		} = await this.usersModel.getAll();

		return response;
	}
}
