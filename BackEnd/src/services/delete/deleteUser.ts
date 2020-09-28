import { Service, Inject } from "typedi";

import UserRepository from "../../repositories/users";

@Service()
export default class DeleteUser {
	constructor(
		@Inject("usersModel") private usersModel: UserRepository,
		@Inject("logger") private logger
	) {}

	public async delete(id_user: number): Promise<void> {
		await this.usersModel.delete(id_user);
	}
}
