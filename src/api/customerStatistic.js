import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/"

const getLeaderboardData = (time) => {
    let command = 'getLeaderboardData';
    return axios.get(API_URL + `customerStatistic.php?command=${command}&each=${time}`);
}

const getVisitedUsers = (time) => {
    let command = 'getVisitedUsers';
    return axios.get(API_URL + `customerStatistic.php?command=${command}&each=${time}`);
}

const getActiveUsers = (time) => {
    let command = 'getActiveUsers';
    return axios.get(API_URL + `customerStatistic.php?command=${command}&each=${time}`);
}

const getChartsData = (time) => {
    let command = 'getChartsData';
    return axios.get(API_URL + `customerStatistic.php?command=${command}&each=${time}`);
}

export {
    getLeaderboardData,
    getVisitedUsers,
    getActiveUsers,
    getChartsData
}