import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/dashboard.php"

const getOverallStatistic = () => {

    const command = "getOverallStatistic";
    return axios.get(API_URL + `?command=${command}`)
}

const getDashboardDataByTime = (filter = "Month") => {
    const command = "getDashboardDataByTime";

    return axios.get(API_URL + `?command=${command}&filter=${filter}`)
}

export {
    getOverallStatistic,
    getDashboardDataByTime,
}