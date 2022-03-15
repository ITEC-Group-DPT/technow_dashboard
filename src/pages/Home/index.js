import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"

const Home = () => {

    const navigate = useNavigate()

    const goToSales = () => {
        // console.log('hehe');
        navigate("/sales")
    }

    const goToProducts = () => {
        navigate("/products")
    }

    const goToCustomers = () => {
        navigate("/customers")
    }

    const goToOrders = () => {
        navigate("/orders")
    }

    return (
        <div
            style={{
                flex: 1,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button onClick={goToSales}>Sales</button>
            <button onClick={goToProducts}>Products</button>
            <button onClick={goToCustomers}>Customers Statistic</button>
            <button onClick={goToOrders}>Order Reports</button>
        </div>
    )
}

export default Home