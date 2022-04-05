import {
	Button,
	Container,
	FormControl,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableContainer,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import _ from 'lodash'
import { useState } from 'react'
import Pagination from '../../components/Pagination/pagination'
import SearchBar from '../../components/SearchBar/searchBar'
import color from '../../constant/color'
import { FilterIc, PlusIc } from '../../constant/icon'
import CustomTableHead from './components/CustomTableHead'
import CustomTableRow from './components/CustomTableRow'
import styles from './product.style'
import { productList } from './store/index'

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

const Products = () => {
	const [filter, setFilter] = useState({ text: '', category: 'Category' })
	const [page, setPage] = useState(1)
	const [order, setOrder] = useState('desc')
	const [orderBy, setOrderBy] = useState('id')

	const filterProductList = (productList) => {
		if (filter.category === 'Category' && filter.text === '') {
			return productList
		} else if (filter.text !== '') {
			return productList.filter((item) => item.name.includes(filter.text))
		} else if (filter.category !== 'Category') {
			return productList.filter((item) => item.type === filter.category)
		}
	}

	const totalPage = Math.ceil(filterProductList(productList).length / 6)

	const handleChangeCategory = (event) => {
		setFilter({
			...filter,
			text: '',
			category: event.target.value,
		})
		if (filterProductList(productList).length === 0) setPage(0)
		else setPage(1)
	}

	const handleChangeSearchValue = (value) => {
		setFilter({
			...filter,
			text: value,
			category: 'Category',
		})
		setPage(1)
	}

	const handleChangePage = (value) => {
		const temp = parseInt(page) + value
		if (temp >= 1 && temp <= totalPage) {
			setPage(temp)
		}
	}

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
								text={filter.text}
								setText={handleChangeSearchValue}
							/>
							<img
								src={FilterIc}
								style={{
									marginLeft: '15px',
									marginRight: '15px',
								}}
							/>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									fontSize: '15px',
									color: color.lightGrayText,
								}}>
								Category
							</Typography>
							<FormControl>
								<Select
									MenuProps={{ disableScrollLock: false }}
									value={filter.category}
									onChange={handleChangeCategory}
									sx={styles.selectInp}>
									<MenuItem value='Category'>
										<em>All category</em>
									</MenuItem>
									{categoryList?.map((item) => {
										return (
											<MenuItem
												value={item}
												sx={{
													color: color.lightGrayText,
												}}>
												{item}
											</MenuItem>
										)
									})}
								</Select>
							</FormControl>

							<Pagination
								maxPages={totalPage}
								page={page}
								onBack={() => handleChangePage(-1)}
								onForward={() => handleChangePage(1)}
							/>
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
								{!_.isEmpty(filterProductList(productList)) ? (
									<TableBody>
										{stableSort(
											filterProductList(productList),
											getComparator(order, orderBy),
										).map((item, index) => {
											const minLimit = (page - 1) * 6
											const maxLimit = page * 6
											if (
												_.inRange(
													index,
													minLimit,
													maxLimit,
												)
											) {
												const colorStock =
													changeStockColor(
														item.stock,
													) === 0
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
								) : (
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											position: 'absolute',
											zIndex: 999,
											width: '60%',
										}}>
										<Typography variant='h3'>
											Không tìm được sản phẩm nào phù hợp
										</Typography>
									</Box>
								)}
							</Table>
						</TableContainer>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Products
