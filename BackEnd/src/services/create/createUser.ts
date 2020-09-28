import { Service, Inject } from "typedi";

import argon2 from "argon2";
import randomBytes from "randombytes";
import UserRepository from "../../repositories/users";
import UserEntity from "../../entities/user";

@Service()
export default class CreateUser {
	constructor(
		@Inject("usersModel") private usersModel: UserRepository,
		@Inject("logger") private logger
	) {}

	public async create(params: UserEntity): Promise<UserEntity> {
		let password = params.password;
		const salt = randomBytes(32);

		let hashedPassword = await argon2.hash(password, { salt });

		const response: UserEntity = await this.usersModel.create({
			...params,
			password: hashedPassword,
		});

		delete response.password;

		return response;
	}
}
