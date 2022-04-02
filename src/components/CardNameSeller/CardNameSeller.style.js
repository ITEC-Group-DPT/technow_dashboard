import { height } from "@mui/system";
import color from '../../constant/color'

const styles = {

	flex: {
		display: 'flex', flexWrap: 'nowrap', alignItems: 'center',
	},


	pNameSlider: {
		margin: 0,

		lineHeight: "20px",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		overflow: "hidden",
		WebkitLineClamp: "2",
		WebkitBoxOrient: "vertical",

		overflowWrap: 'anywhere',
		textAlign: "start",
		fontWeight: "600",
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
		borderRadius: "5px", px: '8px', py:"4px",
		color: color.blue,
		fontSize: "0.85rem",
		fontWeight: "600",
		marginLeft: "auto",
	},

}

export default styles;