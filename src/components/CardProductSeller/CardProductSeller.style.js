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
		marginLeft: "6px",
		fontSize: '16px',

		lineHeight: "20px",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		overflow: "hidden",
		WebkitLineClamp: "2",
		WebkitBoxOrient: "vertical",

		overflowWrap: 'anywhere',
		
		fontWeight: "600",
		fontSize: '17px',
		color: "#2D2D2D",

		// paddingRight: "30%",

	},
	pRatingWrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10px',
	},
	money: {
		backgroundColor: "#F0F7FF",
		borderRadius: "5px", 
		px: '12px', 
		py: "6px",
		marginLeft: 'auto',
		color: "#2C84B6",
		fontSize: "0.85rem",
		fontWeight: "600",
		width:"fit-content",
		textAlign:"end",
	
	},
}

export default styles;