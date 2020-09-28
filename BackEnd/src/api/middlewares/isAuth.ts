import jwt from "jsonwebtoken";
import config from "../../config";

export default (req, res, next) => {
	const token = getTokenFromHeader(req);
	if (!token) return res.sendStatus(401);

	jwt.verify(token, config.token.secretKey, (err: any, user: any) => {
		if (err) return res.sendStatus(403);

		req.user = user;
		next();
	});
};

const getTokenFromHeader = (req) => {
	const authHeader = req.headers.authorization;

	if (
		(authHeader && authHeader.split(" ")[0] === "Token") ||
		(authHeader && authHeader.split(" ")[0] === "Bearer")
	) {
		return req.headers.authorization.split(" ")[1];
	}
	return null;
};
