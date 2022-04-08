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

export {
	getTotalNumberOfProductAdmin,
	getNumberOfProductByCategoryAdmin,
	getAllProductByPageAdmin,
	getProductByCategoryAdmin,
}
