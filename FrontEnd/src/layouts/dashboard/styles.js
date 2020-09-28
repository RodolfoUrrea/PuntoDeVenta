import { makeStyles } from "@material-ui/core";
import { colors, drawerWidth } from "../../configs/desing";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: colors.lightGray,
		marginLeft: `calc(${-drawerWidth}px + 25px)`,
		marginTop: 89,
		margin: 25,
		zIndex: 2,
		borderRadius: "2px",
		boxShadow:
			"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 25,
	},
}));

export default useStyles;
