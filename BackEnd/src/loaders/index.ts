import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

export default async ({ app }) => {
	await dependencyInjectorLoader();
	await expressLoader({ app });
};
