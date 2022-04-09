import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	TextField,
	InputLabel,
	Typography,
	Select,
	MenuItem,
	Button,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { editProduct } from '../../../api/productAPI'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const styles = {
	dialogBox: {
		minHeight: '80vh',
		paddingBottom: '100px',
		paddingTop: {
			xs: '30px',
			md: '50px',
		},
	},
	textField: {
		my: 2,
		width: '100%',
		backgroundColor: 'white',
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

const category = [
	'CPU',
	'Case',
	'Gaming Chair',
	'Headphone',
	'Keyboard',
	'Laptop',
	'Mainboard',
	'Monitor',
	'Mouse',
	'PSU',
	'RAM',
	'SSD',
	'Speaker',
	'VGA',
]

const CustomEditProductDialog = ({ item, open, setOpen }) => {
	const [newValue, setNewValue] = useState({ ...item })

	const onSubmit = async () => {
		const response = await editProduct(newValue)
		console.log(response.data.success)
		if (response.data.success) setOpen(false)
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
						<FormControl fullWidth='true'>
							<TextField
								sx={styles.textField}
								name='name'
								label='Name'
								onChange={(e) =>
									setNewValue({
										...newValue,
										name: e.target.value,
									})
								}
								placeholder='Product name'
								value={newValue.name}
								variant='outlined'
							/>
							<Box sx={{ position: 'relative' }}>
								<InputLabel id='zzzz'>Category</InputLabel>
								<Select
									placeholder='Category'
									labelId='zzzz'
									sx={styles.textField}
									id='demo-simple-select'
									value={newValue.type}
									label='Category'
									MenuProps={MenuProps}
									onChange={(e) => {
										setNewValue({
											...newValue,
											type: e.target.value,
										})
									}}>
									{category.map((catItem) => {
										let value = catItem.replace(' ', '')
										return (
											<MenuItem value={value}>
												{catItem}
											</MenuItem>
										)
									})}
								</Select>
							</Box>
							<TextField
								sx={styles.textField}
								name='price'
								label='Price'
								type='tel'
								placeholder='Product price'
								onChange={(e) => {
									let value = e.target.value.replace(
										/[^0-9]/g,
										'',
									)

									setNewValue({
										...newValue,
										price: value,
									})
								}}
								InputProps={{
									endAdornment: <Typography>VND</Typography>,
								}}
								value={newValue.price}
								variant='outlined'
							/>

							<TextField
								sx={styles.textField}
								name='img1'
								label='Image 1'
								placeholder='Product image 1 url'
								onChange={(e) =>
									setNewValue({
										...newValue,
										img1: e.target.value,
									})
								}
								value={newValue.img1}
								variant='outlined'
							/>

							<TextField
								sx={styles.textField}
								name='img2'
								label='Image 2'
								placeholder='Product image 2 url'
								onChange={(e) =>
									setNewValue({
										...newValue,
										img2: e.target.value,
									})
								}
								value={newValue.img2}
								variant='outlined'
							/>

							<TextField
								sx={styles.textField}
								name='img3'
								label='Image 3'
								placeholder='Product image 3 url'
								onChange={(e) =>
									setNewValue({
										...newValue,
										img3: e.target.value,
									})
								}
								value={newValue.img3}
								variant='outlined'
							/>

							<TextField
								sx={styles.textField}
								name='img4'
								label='Image 4'
								placeholder='Product image 4 url'
								onChange={(e) =>
									setNewValue({
										...newValue,
										img4: e.target.value,
									})
								}
								value={newValue.img4}
								variant='outlined'
							/>

							<Typography sx={{ pb: 1 }}>
								Specification
							</Typography>
							<TextField
								style={{
									textAlign: 'left',
									background: 'white',
								}}
								multiline
								rows={5}
								value={newValue.spec}
								placeholder='Product specification'
								onChange={(e) =>
									setNewValue({
										...newValue,
										spec: e.target.value,
									})
								}
							/>
							<Typography sx={{ pb: 1, pt: 2 }}>
								Description
							</Typography>
							<TextField
								style={{
									textAlign: 'left',
									background: 'white',
								}}
								multiline
								rows={5}
								placeholder='Product description'
								value={newValue.description}
								onChange={(e) =>
									setNewValue({
										...newValue,
										description: e.target.value,
									})
								}
							/>
						</FormControl>
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

export default CustomEditProductDialog
