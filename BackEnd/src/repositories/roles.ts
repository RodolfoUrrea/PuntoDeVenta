import Rol from "../entities/rol";

export default interface RolRepository {
	getAll(): Promise<{ count: number; rows: Rol[] }>;
}
