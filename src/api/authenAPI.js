import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/api/"


const checkToken = () => {
    return axios.get(API_URL + "userAPI.php?command=checkToken");
}

const loginAPI = (email, password) => {

    const data = new FormData();
    data.append("command", "signIn");
    data.append("email", email);
    data.append("password", password);
    data.append("isAdmin", true);


    return axios.post(API_URL + "userAPI.php", data);
}

export {
    checkToken,
    loginAPI,
}