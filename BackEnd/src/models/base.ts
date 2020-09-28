import { Container } from "typedi";

export default class Base {
	protected knex;

	constructor() {
		this.knex = Container.get("knex");
	}
}
