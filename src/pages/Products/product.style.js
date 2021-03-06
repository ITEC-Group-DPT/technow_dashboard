import color from '../../constant/color'

const styles = {
	container: {
		background: color.background,
		minHeight: '100vh',
	},
	productBoard: {
		shadow: '1px solid #848484',
		boxShadow: '0px 1px #d5d6d8',
		borderRadius: '10px',
		px: 6,
		py: 4,
		minHeight: '86.5vh',
		background: 'white',
	},
	box: {
		display: 'flex',
		alignItems: 'center',
	},
	selectInp: {
		minWidth: '140px',
		color: color.lightGrayText,
		mx: '10px',
        borderRadius: "5px",
        boxSizing: 'border-box',
	},
	navigateBtn: {
		display: 'flex',
		border: `1px solid #c0c0c0`,
		borderRadius: '4px',
		width: '33px',
		height: '38px',
		alignItems: 'center',
		justifyContent: 'center',
		ml: '10px',
		minWidth: '33px',
	},
	pageDiv: {
		display: 'flex',
		color: color.lightGrayText,
		border: `1px solid #c0c0c0`,
		borderRadius: '4px',
		width: '86px',
		height: '38px',
		alignItems: 'center',
		justifyContent: 'center',
		ml: '10px',
	},
	dataCell: {
		fontFamily: 'Segoe UI',
		fontSize: '16px',
	},
	popupBox: {
		display: 'flex',
		flexDirection: 'column',
		px: '15px',
		width: '106px',
		height: '83px',
		justifyContent: 'space-around',
	},
	pointerCursor: {
		cursor: 'pointer',
	},
	marginRight10: {
		mr: '10px',
	},
	title: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '38px',
		mb: '20px',
	},
	searchNotFound: {
		mt: 8,
		fontSize: '26px',
		color: color.lightGrayText,
	}
}

export default styles
