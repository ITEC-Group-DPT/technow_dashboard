import axios from './axios'

const API_URL =
	'http://localhost:8080/Technowz_Backend/adminAPI/productManagement.php'

const getTotalNumberOfProductAdmin = (value) => {
	const command = 'getTotalNumberOfProductAdmin'
	return axios.get(API_URL + `?command=${command}&value=${value}`)
}

const getNumberOfProductByCategoryAdmin = (type, value) => {
	const command = 'getNumberOfProductByCategoryAdmin'
	return axios.get(
		API_URL + `?command=${command}&type=${type}&value=${value}`,
	)
}

const getAllProductByPageAdmin = (page, value, orderBy, order) => {
	const command = 'getAllProductByPageAdmin'
	return axios.get(
		API_URL +
			`?command=${command}&page=${page}&value=${value}&orderBy=${orderBy}&order=${order}`,
	)
}

const getProductByCategoryAdmin = (type, page, value, orderBy, order) => {
	const command = 'getProductByCategoryAdmin'
	return axios.get(
		API_URL +
			`?command=${command}&type=${type}&page=${page}&value=${value}&orderBy=${orderBy}&order=${order}`,
	)
}

const editProduct = (product) => {
	let data = new FormData()
	data.append('command', 'modify')
	data.append('productID', product.productID)
	data.append('type', product.type)
	data.append('description', product.description)
	data.append('spec', product.spec)
	data.append('name', product.name)
	data.append('price', product.price)
	data.append('rating', product.rating)
	data.append('sold', product.sold)
	data.append('img1', product.img1)
	data.append('img2', product.img2)
	data.append('img3', product.img3)
	data.append('img4', product.img4)

	return axios.post(API_URL, data)
}

const deleteProduct = (productID) => {
	let data = new FormData()
	data.append('command', 'remove')
	data.append('productID', productID)

	return axios.post(API_URL, data)
}

export {
	getTotalNumberOfProductAdmin,
	getNumberOfProductByCategoryAdmin,
	getAllProductByPageAdmin,
	getProductByCategoryAdmin,
	editProduct,
	deleteProduct,
}
