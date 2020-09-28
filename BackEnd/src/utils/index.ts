const trimExtencion = (file: string): string => {
	try {
		return file.split(".").slice(0, -1).join(".");
	} catch (error) {
		throw new Error(error);
	}
};

const objectToPlainObject = (object: Object): Object => {
	try {
		return JSON.parse(JSON.stringify(object));
	} catch (error) {
		throw new Error(error);
	}
};

export { trimExtencion, objectToPlainObject };
