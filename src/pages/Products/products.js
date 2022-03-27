import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import {
	Button,
	Container,
	MenuItem,
	Popover,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import SearchBar from '../../components/SearchBar/searchBar'
import color from '../../constant/color'
import {
	FilterIc,
	LeftArrowIc,
	PlusIc,
	RightArrowIc,
	ThreeDotIc,
} from '../../constant/icon'
import CustomTableHead from './components/CustomTableHead'
import { fakeData } from './store/index'

const categoryList = [
	'CPU',
	'Case',
	'GamingChair',
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

const styles = {
	container: {
		background: color.background,
		py: '40px',
		px: '0px !important',
	},
	box: {
		display: 'flex',
		alignItems: 'center',
	},
	selectInp: {
		minWidth: '132px',
		mx: '15px',
		color: color.lightGrayText,
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
}

const Products = () => {
	const [searchValue, setSearchValue] = useState('')
	const [filterCategory, setFilterCategory] = useState('1')

	const handleChangeFilter = (event) => {
		setFilterCategory(event.target.value)
	}

	const totalPage = 3
	const [page, setPage] = useState(1)
	const handleChangePage = (value) => {
		const temp = parseInt(page) + value
		if (temp >= 1 && temp <= totalPage) {
			setPage(temp)
		}
	}

	const [order, setOrder] = useState('desc')
	const [orderBy, setOrderBy] = useState('id')
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const stableSort = (array, comparator) => {
		const stabilizedThis = array.map((el, index) => [el, index])
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0])
			if (order !== 0) {
				return order
			}
			return b[1] - a[1]
		})
		return stabilizedThis.map((el) => el[0])
	}

	const descendingComparator = (a, b, orderBy) => {
		if (b[orderBy] < a[orderBy]) return -1
		if (b[orderBy] > a[orderBy]) return 1
		debugger
		return 0
	}

	const getComparator = (order, orderBy) => {
		return order === 'desc'
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy)
	}

	const [anchorEl, setAnchorEl] = useState(false)
	const open = Boolean(anchorEl)
	const handleEditClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleEditClose = () => {
		setAnchorEl(null)
	}

	const changeStockColor = (value) => {
		if (value >= 10) return 0
		else if (value >= 5) return 1
		else return 2
	}

	const convertToVND = (value) => {
		return parseInt(value).toLocaleString() + ' đ'
	}

	return (
		<Container sx={styles.container}>
			<Box
				sx={[
					styles.box,
					{
						justifyContent: 'space-between',
					},
				]}>
				<Box sx={styles.box}>
					<SearchBar
						width='406px'
						text={searchValue}
						setText={setSearchValue}
					/>
					<img
						src={FilterIc}
						style={{ marginLeft: '15px', marginRight: '15px' }}
						alt=''
					/>
					<Typography
						sx={{
							fontFamily: 'Roboto',
							fontSize: '15px',
							color: color.lightGrayText,
						}}>
						Category
					</Typography>
					<Select
						value={filterCategory}
						onChange={handleChangeFilter}
						sx={styles.selectInp}>
						<MenuItem disabled value='1'>
							Category
						</MenuItem>
						{categoryList?.map((item, index) => {
							return (
								<MenuItem
									value={item}
									key={index}
									sx={{ color: color.lightGrayText }}>
									{item}
								</MenuItem>
							)
						})}
					</Select>
					<Button
						sx={styles.navigateBtn}
						onClick={() => handleChangePage(-1)}>
						<img src={LeftArrowIc} alt='' />
					</Button>
					<Button
						sx={styles.navigateBtn}
						onClick={() => handleChangePage(1)}>
						<img src={RightArrowIc} alt='' />
					</Button>
					<Box sx={styles.pageDiv}>{`Page ${page}/${totalPage}`}</Box>
				</Box>
				<Box sx={styles.box}>
					<Button
						sx={{
							color: color.lightGrayText,
							border: `1px solid #c0c0c0`,
							width: '137px',
							height: '38px',
						}}>
						<img
							src={PlusIc}
							style={{ marginRight: '10px' }}
							alt=''
						/>
						Add Product
					</Button>
				</Box>
			</Box>

			<Box sx={styles.box}>
				<TableContainer>
					<Table>
						<CustomTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
						/>
						<TableBody>
							{stableSort(
								fakeData,
								getComparator(order, orderBy),
							).map((item, index) => {
								const minLimit = (page - 1) * 7
								const maxLimit = page * 7 - 1
								if (index >= minLimit && index <= maxLimit) {
									const colorStock =
										changeStockColor(item.stock) === 0
											? color.green
											: changeStockColor(item.stock) === 1
											? color.yellow
											: color.darkRed
									return (
										<TableRow key={index}>
											<TableCell sx={styles.dataCell}>
												{item.productID}
											</TableCell>
											<TableCell>
												<img
													src={item.productImage}
													width={75}
													height={75}
													alt=''
												/>
											</TableCell>
											<TableCell sx={styles.dataCell}>
												{item.productName}
											</TableCell>
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
												{convertToVND(
													item.productPrice,
												)}
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
											<TableCell>
												<img
													style={styles.pointerCursor}
													src={ThreeDotIc}
													alt=''
													onClick={handleEditClick}
												/>
												<Popover
													open={open}
													anchorEl={anchorEl}
													onClose={handleEditClose}
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
														<Box
															sx={[
																styles.box,
																styles.pointerCursor,
															]}>
															<EditOutlinedIcon
																sx={
																	styles.marginRight10
																}
															/>
															Edit
														</Box>
														<Box
															sx={[
																styles.box,
																styles.pointerCursor,
															]}>
															<DeleteOutlinedIcon
																sx={
																	styles.marginRight10
																}
															/>
															Delete
														</Box>
													</Box>
												</Popover>
											</TableCell>
										</TableRow>
									)
								}
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Container>
	)
}

export default Products
