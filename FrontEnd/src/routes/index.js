import React from "react";
import { Switch, Route } from "react-router-dom";

import {
	FormEncuestas,
	GridEncuestas,
	NotificacionesEncuestas,
} from "../screens/encuestas";

import { FormUsuarios, GridUsuarios } from "../screens/usuarios";

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

			<Route path="/usuarios/listado">
				<GridUsuarios />
			</Route>
			<Route path="/usuarios/agregar">
				<FormUsuarios />
			</Route>
		</Switch>
	);
}
