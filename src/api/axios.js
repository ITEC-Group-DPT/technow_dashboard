import axios from 'axios';
// import { decryptData } from '../constant/utils';

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/"

const instance = axios.create({
	baseURL: API_URL,
});

// const getUserIDFromSessionStorage = () => {
// 	const token = sessionStorage.getItem("userInfo");

// 	let data = decryptData(token);

// 	const { userID } = JSON.parse(data);

// 	return userID;
// }

// try {
// 	// Alter defaults after instance has been created
// 	instance.defaults.headers.common['Userid'] = getUserIDFromSessionStorage();
// } catch (error) {
// 	sessionStorage.clear();
// }


// instance.interceptors.request.use(
// 	(config) => {
// 		if (!config.headers.Userid) {

// 			try {
// 				// Alter defaults after instance has been created
// 				config.headers.Userid = "13";
// 			} catch (error) {
// 				sessionStorage.clear();
// 			}
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );
export default instance;