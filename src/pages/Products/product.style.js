import color from '../../constant/color'

const styles = {
	container: {
		background: color.background,
		py: '40px',
		px: '20px !important',
		minHeight: '100vh',

	},
	productBoard: {
		shadow: '1px solid #848484',
		boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
		borderRadius: '10px',
		padding: '20px',
		minHeight: '85vh',
		background: "white",
	},
	box: {
		display: 'flex',
		alignItems: 'center',
	},
	selectInp: {
		minWidth: '132px',
		color: color.lightGrayText,
		mx: '10px',
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
		fontSize: '35px',
		my: '20px',
	},
}

export default styles
