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

const searchOrdersByPage = (search = "", offset = 0, limit = 10) => {
    const command = 'searchOrdersByPage'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&search=${search}&offset=${offset}&limit=${limit}`)
}

const getOrderByPage = (sortByStatus = "All", offset = 0, limit = 10) => {
    const command = 'getOrderByPage'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&sortByStatus=${sortByStatus}&offset=${offset}&limit=${limit}`)
}

const getOrderByStatus = (sortByStatus = "All") => {
    const command = 'getOrderByStatus'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&sortByStatus=${sortByStatus}`)
}

export {
    getOrderSummary,
    getIncomeSummary,
    searchOrdersByPage,
    getOrderByPage,
    getOrderByStatus,
}