export default interface Rol {
	name: string;
	permissions: Array<Permission>;
}

interface Permission {
	id_component: string;
}
