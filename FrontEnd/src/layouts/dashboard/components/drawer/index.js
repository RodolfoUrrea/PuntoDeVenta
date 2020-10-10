import React, { useEffect, useState } from "react";
import clsx from "clsx";

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	Drawer,
	Box,
} from "@material-ui/core";

import {
	ExpandLess as ExpandLessIcon,
	ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

import useStyles from "./styles";
import { TITLE } from "../../../../configs/constants";
// import renderMenu from "./services/render-menu";

import menuJson from "../../../../configs/menu.json";

const MaterialIcon = ({ icon }) => {
	let resolved = require(`@material-ui/icons/${icon}`).default;

	if (!resolved) {
		throw Error(`Could not find @material-ui/icons/${icon}`);
	}

	return React.createElement(resolved);
};

export default function Menu(props) {
	const classes = useStyles();

	const [menu, setMenu] = useState([]);

	useEffect(() => {
		setMenu(menuJson.menu);
	});

	const _selectParent = (id) => {
		const finded = menu.find((item) => {
			return item.id === id;
		});

		let selected = true;
		if (finded.selected !== undefined) selected = !finded.selected;

		finded.selected = selected;

		let newMenu = menu.map((item) => {
			if (item.id === id) return finded;
			return { ...item, selected: false };
		});

		setMenu(newMenu);
	};

	const _selectChild = (idParent, idChild) => {
		const findedChild = menu
			.find((item) => {
				return item.id === idParent;
			})
			.children.find((item) => {
				return item.id === idChild;
			});

		let selected = true;
		if (findedChild.selected !== undefined) selected = !findedChild.selected;

		findedChild.selected = selected;

		let newMenu = menu.map((parent) =>
			parent.children.map((child) => {
				if (child.id === idChild) return findedChild;
				return { ...child, selected: false };
			})
		);

		// setMenu(newMenu);
	};

	const renderMenu = (
		<List>
			{menu.map((parent, indexParent) => {
				return (
					<div key={parent.key}>
						<ListItem
							button
							// selected={parent.selected === true}
							key={parent.key}
							className={clsx({
								[classes.selectedParent]: parent.selected,
							})}
							onClick={() => {
								_selectParent(parent.id);
							}}
						>
							<ListItemIcon>
								<MaterialIcon icon={parent.icon} />
							</ListItemIcon>
							<ListItemText primary={parent.key} />
							{parent.children.length > 0 ? (
								!parent.selected ? (
									<ExpandLessIcon />
								) : (
									<ExpandMoreIcon />
								)
							) : null}
						</ListItem>
						<Collapse
							in={parent.selected === true}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								{parent.children.map((child, indexChild) => (
									<ListItem
										key={child.key}
										button
										className={clsx(classes.nested, {
											[classes.selectedChild]: child.selected,
										})}
										onClick={() => {
											_selectChild(parent.id, child.id);
										}}
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

	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={props.isDrawerOpen}
			classes={{
				paper: classes.drawerPaper,
				paperAnchorLeft: classes.drawerPaperLeft,
			}}
		>
			<Box className={classes.logoContainer}>
				<img width="65" src={process.env.PUBLIC_URL + "/logo.png"} />
				<p className={classes.title}>{TITLE}</p>
			</Box>

			{renderMenu}
		</Drawer>
	);
}
