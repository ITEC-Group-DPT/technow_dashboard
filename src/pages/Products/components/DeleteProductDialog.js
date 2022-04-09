import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	Typography,
	Box,
} from '@mui/material'
import { deleteProduct } from '../../../api/productAPI'

const styles = {
	dialogBox: {
		paddingBottom: '100px',
		paddingTop: {
			xs: '30px',
			md: '50px',
		},
	},
	cancelBtn: {
		backgroundColor: 'red',
		color: 'white',
		textTransform: 'none',
		px: 2,
		py: 1,
		mx: {
			xs: 1,
			md: 5,
		},
		'&: hover': {
			backgroundColor: '#b90000',
		},
	},
	submitBtn: {
		backgroundColor: '#333333',
		color: 'white',
		textTransform: 'none',
		px: 2,
		py: 1,
		mx: {
			xs: 1,
			md: 5,
		},
		'&: hover': {
			backgroundColor: '#000000',
		},
	},
}

const DeleteProductDialog = ({ productID, open, setOpen }) => {
	const onSubmit = async () => {
		const response = await deleteProduct(productID)
		if (response.data.success) {
			setOpen(false)
			window.location.reload()
		}
	}

	const closeDialog = () => {
		setOpen(false)
	}

	return (
		<Dialog open={open} sx={styles.dialogBox} fullWidth='true'>
			<DialogActions>
				<Box sx={{ width: '100%' }}>
					<DialogTitle>Edit Product</DialogTitle>
					<DialogContent>
						<Typography>
							Do you want to delete this product ?
						</Typography>
					</DialogContent>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<Button sx={styles.cancelBtn} onClick={closeDialog}>
							Cancel
						</Button>
						<Button
							sx={styles.submitBtn}
							onClick={onSubmit}
							type='submit'>
							Submit
						</Button>
					</Box>
				</Box>
			</DialogActions>
		</Dialog>
	)
}

export default DeleteProductDialog
