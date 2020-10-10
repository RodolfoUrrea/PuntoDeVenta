import React, { useEffect, useState } from "react";

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	makeStyles,
} from "@material-ui/core";

import {
	ExpandLess as ExpandLessIcon,
	ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

const MaterialIcon = ({ icon }) => {
	let resolved = require(`@material-ui/icons/${icon}`).default;

	if (!resolved) {
		throw Error(`Could not find @material-ui/icons/${icon}`);
	}

	return React.createElement(resolved);
};

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const classes = useStyles();

const renderMenu = (menu) => (
	<List>
		{menu.map((item, index) => {
			return (
				<div key={item.key}>
					<ListItem button key={item.key}>
						<ListItemIcon>
							<MaterialIcon icon={item.icon} />
						</ListItemIcon>
						<ListItemText primary={item.key} />
						{/* {<ExpandLessIcon />  <ExpandMoreIcon />*/}
					</ListItem>
					<Collapse
						in={/*item.expanded*/ true === true}
						timeout="auto"
						unmountOnExit
					>
						<List component="div" disablePadding className={classes.nested}>
							{item.children.map((child, index) => (
								<ListItem
									key={child.key}
									button
									// className={classes.nested}
									// onClick={() => {
									// 	dispatch(
									// 		addTab({
									// 			label: child.nombremenu,
									// 			component: child.componente,
									// 		})
									// 	);
									// }}
								>
									<ListItemIcon>
										<MaterialIcon icon={child.icon} />
									</ListItemIcon>
									<ListItemText primary={child.key} />
								</ListItem>
							))}
						</List>
					</Collapse>
				</div>
			);
		})}
	</List>
);

export default renderMenu;
