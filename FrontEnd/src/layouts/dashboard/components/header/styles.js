import { makeStyles } from "@material-ui/core/styles";
import { colors, drawerWidth } from "../../../../configs/desing";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: colors.blue,
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	primaryBackgroundBar: {
		width: "100%",
		height: "270px",
		position: "fixed",
		background: colors.darkBlue,
	},
	secundaryBackgroundBar: {
		width: "100%",
		height: "calc(100% - 270px)",
		position: "fixed",
		background: colors.lightGray,
		top: 270,
	},
}));

export default useStyles;
