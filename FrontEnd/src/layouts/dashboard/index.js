import React from "react";
import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/header";
import Drawer from "./components/drawer";

import useStyles from "./styles";

export default function Dashboard(props) {
	const classes = useStyles();

	const [isDrawerOpen, setDrawerOpen] = React.useState(true);

	const toggleDrawer = () => {
		setDrawerOpen(isDrawerOpen === true ? false : true);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
			<Drawer isDrawerOpen={isDrawerOpen} />
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: isDrawerOpen,
				})}
			>
				{props.children}
			</main>
		</div>
	);
}
