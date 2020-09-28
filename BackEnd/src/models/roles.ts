import Base from "./base";
import RolRepository from "../repositories/roles";
import RolEntity from "../entities/rol";

export default class Rol extends Base implements RolRepository {
	constructor() {
		super();
	}

	public async getAll(): Promise<{ count: number; rows: RolEntity[] }> {
		const rows = await this.knex
			.select("permissions.id_rol", "permissions.id_component")
			.from("roles")
			.join("permissions", "roles.id_rol", "permissions.id_rol")
			.where({ status: 1 });

		const count = rows.length;

		return { count, rows };
	}
}
