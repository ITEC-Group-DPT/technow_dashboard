import axios from "./axios"

const API_URL = "http://localhost:8080/Technowz_Backend/adminAPI/saleOverview.php"

const getSaleOverview = (sortby) => {
    let  command = "getSaleOverview";
    return axios.get(API_URL + `?command=${command}&sortby=${sortby.toLowerCase()}`)
}

export {
    getSaleOverview,
}