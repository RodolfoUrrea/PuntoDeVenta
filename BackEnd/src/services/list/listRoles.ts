import { Service, Inject } from "typedi";

import RolRepository from "../../repositories/roles";
import Rol from "../../entities/rol";

@Service()
export default class ListRoles {
	constructor(
		@Inject("rolesModel") private rolesModel: RolRepository,
		@Inject("logger") private logger
	) {}

	public async list(): Promise<{ count: number; rows: Rol[] }> {
		const response: {
			count: number;
			rows: Rol[];
		} = await this.rolesModel.getAll();

		return response;
	}
}
