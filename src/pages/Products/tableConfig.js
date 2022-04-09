
const headCells = [
	{
		id: 'productID',
		numeric: false,
		label: 'ID',
		align: 'center'
	},
	{
		id: 'img1',
		numeric: false,
		label: 'Product Image',
		align: 'center'

	},
	{
		id: 'name',
		numeric: false,
		label: 'Product Name',
		align: 'left'
	},
	{
		id: 'dateCreated',
		numeric: false,
		label: 'Date Added',
		align: 'center'

	},
	{
		id: 'price',
		numeric: true,
		label: 'Product Price',
		align: 'right'

	},
	{
		id: 'stock',
		numeric: true,
		label: 'Stock',
		align: 'right'
	},
];

const tableStyle = {
	productID: {
		width: '50px',
		pl: 0,
	},
	img1: {
		width: '230px',
	},
	name: {
		width: '250px',
	},
	dateAdded: {
		width: '160px',
	},
	price: {
		width: '186px',
	},
	stock: {
		width: '100px',
	},
	blankCell: {
		width: '0px',
		px: 0,
	},
}


export {
	headCells,
	tableStyle,
}