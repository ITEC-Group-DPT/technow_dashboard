import create from 'zustand'

export const fakeData = [
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 2,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 5,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
	{
		productID: 1,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4500000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4400000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4300000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4200000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4100000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 4000000,
		stock: 10,
	},
	{
		productID: 2,
		productImage:
			'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu9.jpg?alt=media&token=a1ec6c52-f227-462e-b778-fa69cbc213ca',
		productName: 'Test Product',
		type: 'CPU',
		dateAdded: '25/02/2022',
		productPrice: 5000000,
		stock: 10,
	},
]

const useStore = create((set) => ({
	fishies: {},
	fetch: async (pond) => {
		const response = await fetch(pond)
		set({ fishies: await response.json() })
	},
}))

export default useStore
