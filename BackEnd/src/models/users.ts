import Base from "./base";
import UserRepository from "../repositories/users";
import UserEntity from "../entities/user";

export default class User extends Base implements UserRepository {
	constructor() {
		super();
	}

	public async getAll(): Promise<{ count: number; rows: UserEntity[] }> {
		const rows = await this.knex
			.select("id_user", "name", "last_name", "email", "id_rol")
			.from("users")
			.where({ status: 1 });

		const count = rows.length;

		return { count, rows };
	}

	public async create(params: UserEntity): Promise<UserEntity> {
		const id_user = await this.knex("users")
			.returning("id_user", "name", "last_name", "email", "password", "id_rol")
			.insert(params);

		const newUser = await this.knex
			.select("id_user", "name", "last_name", "email", "id_rol")
			.from("users")
			.where({ id_user })
			.first();

		return newUser;
	}

	public async delete(id_user: number): Promise<void> {
		await this.knex("users").where({ id_user }).update({
			status: 0,
		});
	}

	public async update(id_user: number, data: UserEntity): Promise<void> {
		await this.knex("users").where({ id_user }).update(data);
	}

	public async getByEmail(email: string) {
		const response = await this.knex
			.select("id_user", "name", "last_name", "email", "password", "id_rol")
			.from("users")
			.where({ email, status: 1 })
			.first();

		return response;
	}
}
