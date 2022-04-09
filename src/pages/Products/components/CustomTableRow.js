import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Button, Popover, TableCell, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import color from '../../../constant/color'
import { ThreeDotIc } from '../../../constant/icon'
import CustomEditProductDialog from './CustomEditProductDialog'
import DeleteProductDialog from './DeleteProductDialog'

const styles = {
	box: {
		display: 'flex',
		alignItems: 'center',
		color: '#000',
	},
	cellName: {
		maxWidth: '180px !important',
		overflow: 'hidden',
		WebkitLineClamp: '2',
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
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
	const [openEdit, setOpenEdit] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
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

	const handleDeleteClick = () => {
		setOpenDelete(true)
	}

	const handleEditClick = () => {
		setOpenEdit(true)
	}

	return (
		<>
			<TableRow>
				<TableCell align='center' sx={styles.dataCell}>
					<Typography sx={{ pr: '20px' }}>
						{item.productID}
					</Typography>
				</TableCell>
				<TableCell align='center' sx={styles.dataCell}>
					<img src={item.img1} width={75} height={75} />
				</TableCell>
				<TableCell align='center' sx={styles.dataCell}>
					<Typography sx={[styles.cellName]}>{item.name}</Typography>
				</TableCell>
				<TableCell align='center' sx={[styles.dataCell]}>
					<Typography sx={{ color: color.lightGrayText, pr: '5px' }}>
						{item.dateCreated.substring(0, 10)}
					</Typography>
				</TableCell>
				<TableCell align='center' sx={styles.dataCell}>
					<Typography>{convertToVND(item.price)}</Typography>
				</TableCell>
				<TableCell align='center' sx={styles.dataCell}>
					<Typography
						sx={{
							color: colorStock,
							fontWeight: 'semibold',
						}}>
						{item.stock}
					</Typography>
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
								onClick={handleDeleteClick}
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
				open={openEdit}
				item={item}
				setOpen={setOpenEdit}
			/>
			<DeleteProductDialog
				open={openDelete}
				productID={item.productID}
				setOpen={setOpenDelete}
			/>
		</>
	)
}

export default CustomTableRow
