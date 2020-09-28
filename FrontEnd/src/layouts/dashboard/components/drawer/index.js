import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";

import useStyles from "./styles";
import { TITLE } from "../../../../configs/constants";

export default function Menu(props) {
	const classes = useStyles();

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

			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
