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

const getOrderTotalPage = () => {
    const command = 'getOrderTotalPage'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}`)
}

const getOrderListByPage = (sortByStatus = "All", offset = 0, limit = 10) => {
    const command = 'getOrderListByPage'
    return axios.get(
        API_URL +
        `orderReport.php?command=${command}&sortByStatus=${sortByStatus}&offset=${offset}&limit=${limit}`)
}

export {
    getOrderSummary,
    getIncomeSummary,
    getOrderTotalPage,
    getOrderListByPage,
}