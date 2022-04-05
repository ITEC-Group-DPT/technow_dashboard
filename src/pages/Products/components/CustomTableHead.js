import {
	Box,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'

const styles = {
	dataCell: {
		borderBottom: '0px solid rgba(224, 224, 224, 1)',
	},
	productID: {
		minWidth: '120px',
		maxWidth: '120px',
		width: '120px',
	},
	img1: {
		minWidth: '160px',
		maxWidth: '160px',
		width: '160px',
	},
	name: {
		minWidth: '180px',
		maxWidth: '180px',
		width: '180px',
	},
	dateAdded: {
		minWidth: '110px',
		maxWidth: '110px',
		width: '110px',
	},
	price: {
		minWidth: '186px',
		maxWidth: '186px',
		width: '186px',
	},
	stock: {
		minWidth: '100px',
		maxWidth: '100px',
		width: '100px',
	},
	blankCell: {
		minWidth: '20px',
		maxWidth: '20px',
		width: '20px',
	},
}

const headCells = [
	{
		id: 'productID',
		numeric: false,
		label: 'Product ID',
	},
	{
		id: 'img1',
		numeric: false,
		label: 'Product Image',
	},
	{
		id: 'name',
		numeric: false,
		label: 'Product Name',
	},
	{
		id: 'dateAdded',
		numeric: false,
		label: 'Date Added',
	},
	{
		id: 'price',
		numeric: true,
		label: 'Product Price',
	},
	{
		id: 'stock',
		numeric: true,
		label: 'Stock',
	},
]

const CustomTableHead = (props) => {
	const { orderBy, order, onRequestSort } = props
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property)
	}

	const addStyleById = (id) => {
		switch (id) {
			case 'productID':
				return styles.productID
			case 'img1':
				return styles.img1
			case 'name':
				return styles.name
			case 'price':
				return styles.price
			case 'dateAdded':
				return styles.dateAdded
			case 'stock':
				return styles.stock
		}
	}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => {
					return (
						<TableCell
							sx={[styles.dataCell, addStyleById(headCell.id)]}
							key={headCell.id}
							align={headCell.numeric ? 'right' : 'left'}
							sortDirection={
								orderBy === headCell.id ? order : false
							}>
							{headCell.label}
							<TableSortLabel
								active={true}
								direction={
									orderBy === headCell.id ? order : 'desc'
								}
								onClick={createSortHandler(headCell.id)}>
								{orderBy === headCell.id ? (
									<Box component='span' sx={visuallyHidden}>
										{order === 'desc'
											? 'sorted descending'
											: 'sorted ascending'}
									</Box>
								) : null}
							</TableSortLabel>
						</TableCell>
					)
				})}
				<TableCell
					padding='normal'
					align='center'
					sx={[styles.dataCell, styles.blankCell]}
				/>
			</TableRow>
		</TableHead>
	)
}

export default CustomTableHead
