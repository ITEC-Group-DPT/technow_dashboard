import React, { useState } from 'react'

import useStore from "../../appStore";

import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import "./home.css"


const Home = () => {

    const navigate = useNavigate()

    const { login } = useStore();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

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
        <div style={{
            flex: 1,
            height: "100vh",
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            justifyContent: "center",
        }}>

            <TextField
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
            />

            <TextField
                sx={{ my: 2 }}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
            />

            <Button
                variant='outlined'
                onClick={() => {
                    if (usernameInput != "" && passwordInput != "") {
                        login(usernameInput, passwordInput);
                        setUsernameInput("");
                        setPasswordInput("");
                    }
                }}
            >
                Login
            </Button>

            <div
                style={{
                    marginTop: 50,
                    display: "flex",
                }}
            >
                <button onClick={goToSales}>Sales</button>
                <button onClick={goToProducts}>Products</button>
                <button onClick={goToCustomers}>Customers Statistic</button>
                <button onClick={goToOrders}>Order Reports</button>
            </div>
        </div>
    )
}

export default Home