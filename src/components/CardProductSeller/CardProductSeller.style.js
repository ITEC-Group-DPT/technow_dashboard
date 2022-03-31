import { height } from "@mui/system";

const styles = {

    flex: {
        display: 'flex', flexWrap: 'nowrap', alignItems: 'center',
        
    },


    pNameSlider: {
		margin: 0,
		fontSize: '15px',
		fontWeight: '500',
		lineHeight: "20px",
		textOverflow: "ellipsis",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",

	},
    pRatingWrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10px',
	},
}

export default styles;