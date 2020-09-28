import Base from "./base";
import RolRepository from "../repositories/roles";
import RolEntity from "../entities/rol";

export default class Rol extends Base implements RolRepository {
	constructor() {
		super();
	}

	public async getAll(): Promise<{ count: number; rows: RolEntity[] }> {
		const rows = await this.knex
			.select("id_rol", "name", "description")
			.from("roles")
			.where({ status: 1 });

		const count = rows.length;

		return { count, rows };
	}
}
