import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Button, Popover, TableCell, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import color from '../../../constant/color'
import { ThreeDotIc, EditIc, DeleteIc } from '../../../constant/icon'
import CustomEditProductDialog from './CustomEditProductDialog'
import DeleteProductDialog from './DeleteProductDialog'
import { headCells } from '../tableConfig'

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
		width: '106px',
		justifyContent: 'space-around',
		py: "8px"
	},
	pointerCursor: {
		cursor: 'pointer',
	},
	marginRight10: {
		mr: '10px',
	},
	button: {
		display: 'flex',
		justifyContent: 'start',
		mx: '0px',
		pl: '8px',
		py: "6px",
	},
	buttonText: {
		fontFamily: "Roboto",
		textTransform: "capitalize",
		fontWeight: 100,
		color: color.lightBlack,
		pl: "4px"
	},
}

const CustomTableRow = ({ item, colorStock, handleEdit, handleDelete }) => {
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
		setOpenDelete(true);
		handleShowMoreClose();
	}

	const handleEditClick = () => {
		setOpenEdit(true);
		handleShowMoreClose();
	}

	const checkURL = (url) => {
		console.log('url: ', url);
		return (url.includes("https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/"));
	}
	return (
		<>
			<TableRow>
				<TableCell align={headCells[0].align} sx={{
					...styles.dataCell,
					pl: 0,
				}}>
					<Typography sx={{
						pr: "26px",
					}}>
						{item.productID}
					</Typography>
				</TableCell>
				<TableCell align={headCells[1].align} sx={styles.dataCell}>
					<img
						src={checkURL(item.img1) ? item.img1 : require("../../../assets/not-found.png")}
						width={100}
						height={100}
					/>
				</TableCell>
				<TableCell align={headCells[2].align} sx={styles.dataCell}>
					<Typography sx={[styles.cellName]}>{item.name}</Typography>
				</TableCell>
				<TableCell align={headCells[3].align} sx={[styles.dataCell]}>
					<Typography sx={{ color: color.lightGrayText, pr: "6px" }}>
						{item.dateCreated.substring(0, 10)}
					</Typography>
				</TableCell>
				<TableCell align={headCells[4].align} sx={styles.dataCell}>
					<Typography sx={{ pr: "26px" }}>{convertToVND(item.price)}</Typography>
				</TableCell>
				<TableCell
					align={headCells[5].align} sx={styles.dataCell}>
					<Typography
						sx={{
							color: colorStock,
							fontWeight: 'semibold',
							pr: "26px"
						}}>
						{item.stock}
					</Typography>
				</TableCell>

				<TableCell sx={{
					...styles.dataCell, px: 0, textAlign: "right"
				}}>
					<img
						style={styles.pointerCursor}
						src={ThreeDotIc}
						onClick={handleShowMoreOpen}
					/>
					<Popover
						open={openShowMore}
						anchorEl={anchorEl}
						onClose={handleShowMoreClose}
						// disableScrollLock={true}
						anchorOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'center',
							horizontal: 'left',
						}}
						className="productOption"
					>
						<Box

							sx={styles.popupBox}
						>
							<Button
								sx={[
									styles.box,
									styles.pointerCursor,
									styles.button,
								]}
								onClick={handleEditClick}
							>
								<img src={EditIc} style={{ paddingLeft: "6px" }} />
								<Typography sx={styles.buttonText}>Edit</Typography>
							</Button>
							<Button
								onClick={handleDeleteClick}
								sx={[
									styles.box,
									styles.pointerCursor,
									styles.button,
								]}>
								<img src={DeleteIc} style={{ paddingLeft: "6px" }} />

								<Typography sx={styles.buttonText}>Delete</Typography>
							</Button>
						</Box>
					</Popover>
				</TableCell>
			</TableRow>
			<CustomEditProductDialog
				open={openEdit}
				item={item}
				setOpen={setOpenEdit}
				handleEdit={handleEdit}
			/>
			<DeleteProductDialog
				open={openDelete}
				productID={item.productID}
				setOpen={setOpenDelete}
				handleDelete={handleDelete}
			/>
		</>
	)
}

export default CustomTableRow
