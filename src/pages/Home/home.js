import React, { useState } from 'react'

import useStore from "../../appStore";

import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import styles from "./home.style";


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
                variant="outlined"
                value={usernameInput}
                placeholder={"Username"}
                onChange={(e) => setUsernameInput(e.target.value)}
            />

            <TextField
                sx={{ my: 2 }}
                placeholder={"Password"}
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
                <Button
                    sx={styles.navButton}
                    variant="outlined"
                    onClick={goToSales}>
                    Sales
                </Button>

                <Button
                    sx={styles.navButton}
                    variant="outlined"
                    onClick={goToProducts}>
                    Products
                </Button>

                <Button
                    sx={styles.navButton}
                    variant="outlined"
                    onClick={goToCustomers}>
                    Customers Statistic
                </Button>

                <Button
                    sx={styles.navButton}
                    variant="outlined"
                    onClick={goToOrders}>
                    Order Reports
                </Button>
            </div>
        </div>
    )
}



export default Home