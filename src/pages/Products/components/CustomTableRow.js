import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Button, Popover, TableCell, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import color from '../../../constant/color'
import { ThreeDotIc } from '../../../constant/icon'
import CustomEditProductDialog from './CustomEditProductDialog'

const styles = {
	box: {
		display: 'flex',
		alignItems: 'center',
		color: '#000',
	},
	dataCell: {
		fontFamily: 'Segoe UI',
		fontSize: '16px',
		borderBottom: '0px solid rgba(224, 224, 224, 1)',
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
	button: {
		display: 'flex',
		justifyContent: 'flex-start',
		mx: '0px',
		px: '0px',
	},
}

const CustomTableRow = ({ item, colorStock }) => {
	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(false)
	const openShowMore = Boolean(anchorEl)

	const handleShowMoreOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleShowMoreClose = () => {
		setAnchorEl(null)
	}

	const convertToVND = (value) => {
		return parseInt(value).toLocaleString() + ' đ'
	}

	const handleEditClick = () => {
		setOpen(true)
	}

	return (
		<>
			<TableRow>
				<TableCell sx={styles.dataCell}>{item.productID}</TableCell>
				<TableCell sx={styles.dataCell}>
					<img src={item.productImage} width={75} height={75} />
				</TableCell>
				<TableCell sx={styles.dataCell}>{item.productName}</TableCell>
				<TableCell
					sx={[
						styles.dataCell,
						{
							color: color.lightGrayText,
						},
					]}>
					{item.dateAdded}
				</TableCell>
				<TableCell
					align='right'
					sx={[
						styles.dataCell,
						{
							paddingRight: '30px',
						},
					]}>
					{convertToVND(item.productPrice)}
				</TableCell>
				<TableCell
					align='center'
					sx={[
						styles.dataCell,
						{
							color: colorStock,
							fontWeight: 'semibold',
						},
					]}>
					{item.stock}
				</TableCell>
				<TableCell sx={styles.dataCell}>
					<img
						style={styles.pointerCursor}
						src={ThreeDotIc}
						onClick={handleShowMoreOpen}
					/>
					<Popover
						open={openShowMore}
						anchorEl={anchorEl}
						onClose={handleShowMoreClose}
						disableScrollLock={true}
						anchorOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'center',
							horizontal: 'left',
						}}>
						<Box sx={styles.popupBox}>
							<Button
								sx={[
									styles.box,
									styles.pointerCursor,
									styles.button,
								]}
								onClick={handleEditClick}>
								<EditOutlinedIcon sx={styles.marginRight10} />
								Edit
							</Button>
							<Button
								sx={[
									styles.box,
									styles.pointerCursor,
									styles.button,
								]}>
								<DeleteOutlinedIcon sx={styles.marginRight10} />
								Delete
							</Button>
						</Box>
					</Popover>
				</TableCell>
			</TableRow>
			<CustomEditProductDialog
				open={open}
				item={item}
				setOpen={setOpen}
			/>
		</>
	)
}

export default CustomTableRow
