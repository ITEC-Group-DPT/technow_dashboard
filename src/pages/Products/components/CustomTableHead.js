import {
	Box,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'

const headCells = [
	{
		id: 'productID',
		numeric: false,
		label: 'Product ID',
	},
	{
		id: 'productImage',
		numeric: false,
		label: 'Product Image',
	},
	{
		id: 'productName',
		numeric: false,
		label: 'Product Name',
	},
	{
		dateAdded: 'date',
		numeric: false,
		label: 'Date Added',
	},
	{
		id: 'productPrice',
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

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => {
					return (
						<TableCell
							sx={{
								borderBottom:
									'0px solid rgba(224, 224, 224, 1)',
							}}
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
				<TableCell padding='normal' align='center' />
			</TableRow>
		</TableHead>
	)
}

export default CustomTableHead
