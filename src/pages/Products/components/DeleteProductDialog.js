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
		ml: 3,
		'&: hover': {
			backgroundColor: '#000000',
		},
	},
}

const DeleteProductDialog = ({ productID, open, setOpen, handleDelete }) => {
	const onSubmit = async () => {
		const response = await deleteProduct(productID);
		handleDelete();
		closeDialog();
	}

	const closeDialog = () => {
		setOpen(false)
	}

	return (
		<Dialog open={open} sx={styles.dialogBox} fullWidth onClose={closeDialog}>
			<DialogActions>
				<Box sx={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", py: "24px" }}>
					<DialogTitle sx={{ fontWeight: "600", p: 0 }}>Edit Product</DialogTitle>
					<DialogContent>
						<Typography>
							Do you want to delete this product ?
						</Typography>
					</DialogContent>
					<Box sx={{ display: 'flex' }}>
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
