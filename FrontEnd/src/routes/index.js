import React from "react";
import { Switch, Route } from "react-router-dom";

import {
	FormEncuestas,
	GridEncuestas,
	NotificacionesEncuestas,
} from "../screens/encuestas";

export default function routes() {
	return (
		<Switch>
			<Route path="/encuestas/agregar">
				<FormEncuestas />
			</Route>
			<Route path="/encuestas/editar/:id">
				<FormEncuestas />
			</Route>
			<Route path="/encuestas/listado">
				<GridEncuestas />
			</Route>
			<Route path="/encuestas/notificaciones">
				<NotificacionesEncuestas />
			</Route>
		</Switch>
	);
}
