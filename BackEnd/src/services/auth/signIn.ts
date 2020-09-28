import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { Service, Inject } from "typedi";

import { objectToPlainObject } from "../../utils";
import config from "../../config";
import UserRepository from "../../repositories/users";
import UserEntity from "../../entities/user";

@Service()
export default class SignIn {
	constructor(
		@Inject("usersModel") private usersModel: UserRepository,
		@Inject("logger") private logger
	) {}

	public async signIn(params: {
		email: string;
		password: string;
	}): Promise<{ user: UserEntity; token: string }> {
		const user: UserEntity = await this.usersModel.getByEmail(params.email);

		if (!user) throw new Error("Invalid email or password");

		const validPassword = await argon2.verify(user.password, params.password);

		if (!validPassword) throw new Error("Invalid email or password");

		delete user.password;

		const token = await this.generateToken(user);

		return { user, token };
	}

	private async generateToken(payload: UserEntity) {
		const token = jwt.sign(
			objectToPlainObject(payload),
			config.token.secretKey,
			{
				expiresIn: config.token.expirationTime,
			}
		);

		return token;
	}
}
