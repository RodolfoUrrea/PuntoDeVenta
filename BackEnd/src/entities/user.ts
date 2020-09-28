import { Interface } from "readline";

export default interface User {
	id_user: number;
	name: string;
	last_name: string;
	email: string;
	password: string;
	status: number;
}
