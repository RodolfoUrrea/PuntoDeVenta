import { Service, Inject } from "typedi";

import UserRepository from "../../repositories/users";
import UserEntity from "../../entities/user";

@Service()
export default class UpdateUser {
	constructor(
		@Inject("usersModel") private usersModel: UserRepository,
		@Inject("logger") private logger
	) {}

	public async update(params: UserEntity): Promise<UserEntity> {
		const id_user = params.id_user;
		delete params.id_user;

		const response: UserEntity = await this.usersModel.update(id_user, params);

		return response;
	}
}
