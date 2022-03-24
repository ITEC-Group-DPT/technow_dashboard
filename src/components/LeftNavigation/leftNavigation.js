import React, { useState } from 'react'

//MUI
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom'

//component 
import TabIcon from './tabIcon'

//theme, design
import {
    DefaultAvaIc,
    HomeIc,
    SaleIc,
    ProductIc,
    StatIc,
    OrderIc,
    VersionIc,
    LogOutIc,
} from "../../constant/icon"
import styles from "./leftNavigation.style"

const tabNames = ["Homes", "Sales", "Products", "Customer Statistic", "Order Reports"]
const tabIcon = [HomeIc, SaleIc, ProductIc, StatIc, OrderIc]

const LeftNavigation = () => {

    const navigate = useNavigate();

    const [tabChoose, setTabChoose] = useState(0);

    const navigateTab = (index) => {

        if (tabChoose == index) return;
        setTabChoose(index);

        switch (index) {
            case 0:
                navigate("/");
                break;

            case 1:
                navigate("/sales")
                break;

            case 2:
                navigate("/products")
                break;

            case 3:
                navigate("/customers")
                break;

            case 4:
                navigate("/orders")
                break;

            default:
                break;
        }
    }

    return (
        <Box sx={styles.main}>
            <Box sx={styles.container}>
                <img style={styles.avatar} src={DefaultAvaIc} />

                {
                    tabIcon.map((icon, index) => (
                        <TabIcon
                            currentTab={tabChoose}
                            tabName = {tabNames[index]}

                            icon={icon}
                            index={index}
                            onClick={() => navigateTab(index)}
                        />
                    ))
                }

                <Box
                    sx={styles.bottomBox}>
                    <Box
                        sx={styles.bottomIc}
                    >
                        <img src={VersionIc} width={38} height={38} />
                    </Box>

                    <Button
                        sx={styles.bottomIc}
                        color={"error"}
                        disableRipple
                    >
                        <img src={LogOutIc} width={20} height={20} />
                    </Button>
                </Box>


            </Box>
        </Box>
    )
}


export default LeftNavigation;
