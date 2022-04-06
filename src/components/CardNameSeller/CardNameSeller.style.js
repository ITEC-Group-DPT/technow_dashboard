import { height } from "@mui/system";
import color from '../../constant/color'

const styles = {

	flex: {
		display: 'flex', 
		flexWrap: 'nowrap', 
		alignItems: 'center',
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
		
		
		color: "#2C84B6",
		fontSize: "0.85rem",
		fontWeight: "600",
		width:"fit-content",
		textAlign:"center",
	},

}

export default styles;