import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/"

const getOrderSummary = (sortBy) => {
    const command = 'getOrderSummary'
    return axios.get(
        API_URL +
            `orderReport.php?command=${command}&sortBy=${sortBy}`)
}

const getIncomeSummary = (sortBy) => {
    const command = 'getIncomeSummary'
    return axios.get(
        API_URL +
            `orderReport.php?command=${command}&sortBy=${sortBy}`)
}

// const getOrderListData = (email, password) => {

//     const data = new FormData();
//     data.append("command", "signIn");
//     data.append("email", email);
//     data.append("password", password);

//     return axios.post(API_URL + "userAPI.php", data);
// }

export {
    getOrderSummary,
    getIncomeSummary,
}