import UserEntity from "../entities/user";

export default interface UserRepository {
	getAll(): Promise<{ count: number; rows: UserEntity[] }>;
	create(params: UserEntity): Promise<UserEntity>;
	update(id_user: number, data: UserEntity);
	delete(id_user: number);
	getByEmail(email: string);
}
