import {
	Button,
	Container,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableContainer,
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
} from '../../constant/icon'
import CustomTableHead from './components/CustomTableHead'
import CustomTableRow from './components/CustomTableRow'
import { productList } from './store/index'
import _ from 'lodash'

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
		px: '20px !important',
		minHeight: '100vh',
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
		marginTop: '20px',
		marginBottom: '30px',
	},
	productBoard: {
		shadow: '1px solid #848484',
		boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
		borderRadius: '10px',
		padding: '20px',
		minHeight: '85vh',
	},
}

const Products = () => {
	const [searchValue, setSearchValue] = useState('')
	const [filter, setFilter] = useState({ text: '', category: 'Category' })

	const filterProductList =
		filter.category === 'Category'
			? productList
			: productList.filter(
					(item) =>
						item.type === filter.category &&
						item.productName.includes(filter.text),
			  )

	const handleChangeFilter = (event) => {
		setFilter({
			...filter,
			category: event.target.value,
		})
		setPage(1)
	}

	const totalPage = Math.ceil(filterProductList.length / 6)
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
		return 0
	}

	const getComparator = (order, orderBy) => {
		return order === 'desc'
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy)
	}

	const changeStockColor = (value) => {
		if (value >= 10) return 0
		else if (value >= 5) return 1
		else return 2
	}

	return (
		<Box sx={styles.container}>
			<Container>
				<Typography sx={styles.title}>Product Management</Typography>
				<Box sx={styles.productBoard}>
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
								style={{
									marginLeft: '15px',
									marginRight: '15px',
								}}
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
								disableScrollLock={true}
								value={filter.category}
								onChange={handleChangeFilter}
								sx={styles.selectInp}>
								<MenuItem value='Category'>Category</MenuItem>
								{categoryList?.map((item, index) => {
									return (
										<MenuItem
											value={item}
											key={index}
											sx={{
												color: color.lightGrayText,
											}}>
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
							<Box
								sx={
									styles.pageDiv
								}>{`Page ${page}/${totalPage}`}</Box>
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
										filterProductList,
										getComparator(order, orderBy),
									).map((item, index) => {
										const minLimit = (page - 1) * 6
										const maxLimit = page * 6
										if (
											_.inRange(index, minLimit, maxLimit)
										) {
											const colorStock =
												changeStockColor(item.stock) ===
												0
													? color.green
													: changeStockColor(
															item.stock,
													  ) === 1
													? color.yellow
													: color.darkRed
											return (
												<CustomTableRow
													colorStock={colorStock}
													item={item}
												/>
											)
										}
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Products
