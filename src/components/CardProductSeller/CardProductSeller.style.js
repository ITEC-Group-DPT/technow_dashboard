import { height } from "@mui/system";
import color from '../../constant/color'

const styles = {

	flex: {
		display: 'flex', flexWrap: 'nowrap', alignItems: 'center',

	},


	pNameSlider: {
		margin: 0,
		fontSize: '16px',
		fontWeight: '500',
		lineHeight: "20px",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		overflow: "hidden",
		WebkitLineClamp: "2",
		WebkitBoxOrient: "vertical",

		overflowWrap: 'anywhere',
		textAlign: "start",
		fontWeight: "700",
		fontSize: '17px',

	},
	pRatingWrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10px',
	},
	money: {
		width: 'fit-content',
		backgroundColor: color.lightBlue,
		borderRadius: 5, px: '4px',
		color: color.blue,
		fontSize: "0.9rem",
		marginLeft: "auto",
		fontWeight: "700",

	},
}

export default styles;