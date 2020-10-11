import { makeStyles } from "@material-ui/core";
import { colors, drawerWidth } from "../../../../configs/desing";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaperLeft: {
		border: 0,
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
	},
	drawerPaper: {
		width: drawerWidth,
	},
	logoContainer: {
		background: colors.main,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		padding: "30px 0px 30px 0px",
	},
	title: {
		color: colors.title,
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
		marginBottom: 0,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
	// selectedParent: {
	// 	background: "#25292d",
	// },
	// selectedChild: {
	// 	background: "#5a656f",
	// },
}));

export default useStyles;
