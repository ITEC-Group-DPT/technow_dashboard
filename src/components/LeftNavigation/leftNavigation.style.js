const styles = {
	main: {
		position: 'fixed',
		left: 0,
		width: 'fit-content',
		height: '100%',
		overflow: 'hidden',
		boxShadow: '1px 0 rgba(0,0,0,0.25)',
	},
	openMain: {
		position: 'fixed',
		left: 0,
		height: '100%',
		width: '100%',
		background: 'rgba(0,0,0,0.3)',
		zIndex: 99,
	},
	navigation: {
		position: 'fixed',
		background: 'white',

		display: 'flex',
		border: 'none',
		padding: 0,
		zIndex: 9999,
		height: '100vh',
		
	},
	container: {
		position: 'fixed',
		background: 'white',

		boxShadow: "0.5px 0 0.5px rgba(0,0,0,0.15)",
		display: 'flex',
		flexDirection: 'column',

		border: 'none',
		padding: 0,

		height: '100vh',
		zIndex: 9999,
	},

	openMiniContainer: {
		position: 'fixed',
		background: 'white',

		boxShadow: "0px 0 0px rgba(0,0,0,0.15)",
		display: 'flex',
		flexDirection: 'column',

		border: 'none',

		padding: 0,

		height: '100vh',
		zIndex: 9999,
	},

	openContainer: {
		position: 'fixed',
		background: 'white',

		left: 84,
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '0.5px 0px 1px rgba(0,0,0, 0.25)',

		border: 'none',
		padding: 0,

		width: 280,
		height: '100vh',
		zIndex: 9998,
	},
	avatar: {
		margin: '80px 14px',
		display: 'flex',
		alignItems: 'center',
		width: '56px',
		height: '56px',
	},
	username: {
		my: '90px',
		fontWeight: '600',
		fontSize: '24px',
		textAlign: 'start',
		marginLeft: '18px',
	},

	choosenIc: {
		background: 'rgba(0,0,0,0.03)',
		borderLeft: '2px solid #070707',
	},
	tabIc: {
		width: '24px',
		height: '24px',
	},
	tabNameBox: {
		py: '24px',
		display: 'flex',
		justifyContent: 'flex-start',
		borderRadius: 0,
	},
	tabName: {
		marginLeft: '10px',
		fontSize: '18px',
		lineHeight: '24px',
		color: 'black !important',

		textTransform: 'capitalize',
	},
	icBox: {
		py: '24px',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0,
	},
	bottomBox: {
		position: 'absolute',
		width: '100%',
		bottom: 30,
	},
	bottomIc: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0,
		py: '12px',
		alignItems: 'center',
		'&.MuiButtonBase-root:hover': {
			bgcolor: 'transparent',
		},
	},
	bottomTextBox: {
		width: '100%',
		py: '12px',
		pr: 0,
		display: 'flex',
		justifyContent: 'start',

		'&.MuiButtonBase-root:hover': {
			bgcolor: 'transparent',
		},
	},
	versionText: {
		fontWeight: '600',
		color: '#8B8B8B !important',
		lineHeight: '24px',
		paddingBottom: '4px',
	},
	logoutText: {
		marginLeft: '2px',

		fontWeight: '600',
		color: '#FF5454 !important',
		lineHeight: '24px',
	},
}

export default styles
