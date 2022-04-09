import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { headCells, tableStyle} from '../tableConfig'

const styles = {
	dataCell: {
		borderBottom: '0px solid rgba(224, 224, 224, 1)',
		color: "black",
		fontWeight: "600",
		fontSize: "18px"
	},
}

const CustomTableHead = (props) => {
	const { orderBy, order, onRequestSort } = props
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property)
	}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => {
					console.log('headCell: ', headCell);
					return (
						<TableCell
							sx={[styles.dataCell, tableStyle[headCell.id]]}
							key={headCell.id}
							align={headCell.align || 'center'}
							sortDirection={
								orderBy === headCell.id ? order : false
							}>
							{headCell.label}
							{headCell.id !== 'img1' && (
								<TableSortLabel
									active={true}
									direction={
										orderBy === headCell.id ? order : 'asc'
									}
									onClick={createSortHandler(headCell.id)}
								/>
							)}
						</TableCell>
					)
				})}
				<TableCell
					padding='normal'
					align='right'
					sx={[styles.dataCell, tableStyle.blankCell]}
				/>
			</TableRow>
			
		</TableHead>
	)
}

export default CustomTableHead
