import {
	Button,
	Container,
	Divider,
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
import React, { useMemo, useState, useEffect } from 'react'
import Pagination from '../../components/Pagination/pagination'
import SearchBar from '../../components/SearchBar/searchBar'
import color from '../../constant/color'
import { FilterIc, PlusIc } from '../../constant/icon'
import CustomTableHead from './components/CustomTableHead'
import CustomTableRow from './components/CustomTableRow'
import styles from './product.style'
import "./products.css"
import {
	getTotalNumberOfProductAdmin,
	getNumberOfProductByCategoryAdmin,
	getAllProductByPageAdmin,
	getProductByCategoryAdmin,
} from '../../api/productAPI.js'

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
	const [totalPage, setTotalPage] = useState(1)
	const [order, setOrder] = useState('asc')
	const [orderBy, setOrderBy] = useState('productID')
	const [filteredList, setFilteredList] = useState(null)

	const initTotalPage = async () => {
		const response = await getTotalNumberOfProductAdmin('')
		const _totalPage = response.data.data[0].totalPage
		setTotalPage(Math.ceil(_totalPage / 6))
	}

	const initProductList = async () => {
		const response = await getAllProductByPageAdmin(1, '', orderBy, order)
		const _productList = response.data.data
		setFilteredList(_productList)
	}

	const handleChangeCategory = async (event) => {
		const temp = event.target.value
		let value = temp === 'Category' ? '' : temp
		setFilter({
			...filter,
			category: temp,
		})

		const response1 = await getProductByCategoryAdmin(
			value,
			1,
			filter.text,
			orderBy,
			order,
		)
		const _productList = response1.data.data
		setFilteredList(_productList)

		const response2 = await getNumberOfProductByCategoryAdmin(
			value,
			filter.text,
		)
		const _totalPage = response2.data.data[0].totalPage
		setTotalPage(Math.ceil(_totalPage / 6))

		setPage(1)
	}

	const handleChangeSearchValue = async (value) => {
		setFilter({
			...filter,
			text: value,
		})

		const temp = filter.category === 'Category' ? '' : filter.category

		const response1 = await getProductByCategoryAdmin(
			temp,
			1,
			value,
			orderBy,
			order,
		)
		const _productList = response1.data.data
		setFilteredList(_productList)

		const response2 = await getNumberOfProductByCategoryAdmin(temp, value)
		const _totalPage = response2.data.data[0].totalPage
		setTotalPage(Math.ceil(_totalPage / 6))
		if (_totalPage !== 0) setPage(1)
		else setPage(0)
	}

	const handleChangePage = async (value) => {
		const temp = parseInt(page) + value
		if (temp >= 1 && temp <= totalPage) {
			setPage(temp)
			let response
			if (filter.category === 'Category') {
				response = await getAllProductByPageAdmin(
					temp,
					filter.text,
					orderBy,
					order,
				)
			} else {
				response = await getProductByCategoryAdmin(
					filter.category,
					temp,
					filter.text,
					orderBy,
					order,
				)
			}
			const _productList = response.data.data
			setFilteredList(_productList)
		}
	}

	const handleRequestSort = async (event, property) => {
		let isAsc
		let temp
		if (property === orderBy) {
			isAsc = order === 'asc'
			temp = isAsc ? 'desc' : 'asc'
		} else {
			temp = 'desc'
		}
		setOrder(temp)
		setOrderBy(property)
		let response
		if (filter.category === 'Category') {
			response = await getAllProductByPageAdmin(
				1,
				filter.text,
				property,
				temp,
			)
		} else {
			response = await getProductByCategoryAdmin(
				filter.category,
				1,
				filter.text,
				property,
				temp,
			)
		}
		const _productList = response.data.data
		setFilteredList(_productList)
	}

	const changeStockColor = (value) => {
		if (value >= 10) return 0
		else if (value >= 5) return 1
		else return 2
	}

	useEffect(() => {
		initTotalPage()
		initProductList()
	}, [])

	useEffect(() => {
		return {
			filteredList,
		}
	}, [filteredList])

	return (
		<Box sx={styles.container}>
			<Container sx={{ maxWidth: '1300px !important', py: 4 }}>
				<Typography sx={styles.title}>Product Management</Typography>
				<Box sx={styles.productBoard}>
					<Box
						sx={[
							styles.box,
							{
								mt: "16px",
								justifyContent: 'space-between',
								// px: "16px"
							},
						]}>
						<Box sx={[styles.box, { height: '44px' }]}>
							<SearchBar
								width='500px'
								text={filter.text}
								placeholder='Search for product name...'
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
							<FormControl sx={{ height: '100%', mr: 2 }}>
								<Select
									className='categorySelect'
									MenuProps={{ disableScrollLock: true }}
									value={filter.category}
									onChange={handleChangeCategory}
									sx={[
										styles.selectInp,
										{ height: '100%', p: '0px' },
									]}
								>
									<MenuItem value='Category'
										sx={{ color: color.lightGrayText }}
									>
										All
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

						<Box sx={[styles.box, { height: '38px' }]}>
							<Button
								sx={{
									height: '100%',
									color: color.lightGrayText,
									border: `1px solid #c0c0c0`,
									width: '137px',
									textTransform: 'capitalize',
								}}>
								<img
									src={PlusIc}
									style={{ marginRight: '10px' }}
								/>
								<Typography sx={{ fontSize: '14px' }}>Add Product</Typography>
							</Button>
						</Box>
					</Box>

					<Box sx={[styles.box, { pt: '30px' }]}>
						<TableContainer className='productTable'>
							<Table>
								<CustomTableHead
									order={order}
									orderBy={orderBy}
									onRequestSort={handleRequestSort}
								/>

								{!_.isEmpty(filteredList) &&

									<TableBody>
										{filteredList.map((item, index) => {
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
										})}
									</TableBody>
								}
								{
									filteredList != null && filteredList.length == 0 &&
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
								}
							</Table>
						</TableContainer>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Products
