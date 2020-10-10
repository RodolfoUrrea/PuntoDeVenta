import React from "react";
import clsx from "clsx";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";

export default function Header(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isProfileMenuOpen = Boolean(anchorEl);

	const handleProfileMenuClose = () => {
		setAnchorEl(null);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const profileMenuId = "profile-menu";
	const renderProfileMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={profileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isProfileMenuOpen}
			onClose={handleProfileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuClose}>Perfil</MenuItem>
			<MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<>
			<div className={classes.grow}>
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: props.isDrawerOpen,
					})}
				>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							onClick={props.toggleDrawer}
						>
							{props.isDrawerOpen === true ? <ChevronLeftIcon /> : <MenuIcon />}
						</IconButton>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton
								edge="end"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderProfileMenu}
			</div>
			<div className={classes.primaryBackgroundBar} />
			<div className={classes.secundaryBackgroundBar} />
		</>
	);
}
