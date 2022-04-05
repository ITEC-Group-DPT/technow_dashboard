import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/"

const getOrderSummary = (sortBy = 'month') => {
    const command = 'getOrderSummary'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&sortBy=${sortBy}`)
}

const getIncomeSummary = (sortBy = 'month') => {
    const command = 'getIncomeSummary'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&sortBy=${sortBy}`)
}

const getOrderByPage = (searchVal = "", sortByStatus = "All", offset = 0, limit = 10) => {
    const command = 'getOrderByPage'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&search=${searchVal}&sortByStatus=${sortByStatus}&offset=${offset}&limit=${limit}`)
}

const getOrderByFilter = (searchVal = "", sortByStatus = "All") => {
    const command = 'getOrderByFilter'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&search=${searchVal}&sortByStatus=${sortByStatus}`)
}

export {
    getOrderSummary,
    getIncomeSummary,
    getOrderByPage,
    getOrderByFilter
}