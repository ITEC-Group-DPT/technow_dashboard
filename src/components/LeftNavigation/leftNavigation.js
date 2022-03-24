import React, { useState } from 'react'

//MUI
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/base/ButtonUnstyled';

//component 
import TabIcon from './tabIcon'
import BottomTab from './bottomTab';

//theme, design
import {
    DefaultAvaIc,
    HomeIc,
    SaleIc,
    ProductIc,
    StatIc,
    OrderIc,
} from "../../constant/icon"
import styles from "./leftNavigation.style"

const tabNames = ["Homes", "Sales", "Products", "Customer Statistic", "Order Reports"]
const tabIcon = [HomeIc, SaleIc, ProductIc, StatIc, OrderIc]

const LeftNavigation = () => {

    const navigate = useNavigate();

    const [tabChoose, setTabChoose] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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

    const onControlOpen = (open) => {
        setTimeout(() => {
            setIsOpen(open)
        }, 50);
    } 
    return (
        <Box sx={[styles.main, isOpen && { background: "rgba(0,0,0,0.3)" }]}>

            <button
                id='leftNav'
                onMouseEnter={() => onControlOpen(true)}
                onMouseLeave={() => onControlOpen(false)}

                style={isOpen ? styles.openContainer : styles.container}
            >

                <Box sx={styles.avatarBox}>
                    <img style={styles.avatar} src={DefaultAvaIc} />
                    {
                        isOpen &&
                        <Typography
                            sx={styles.username}
                        >
                            Kurozemi
                        </Typography>
                    }
                </Box>

                {
                    tabIcon.map((icon, index) => (
                        <TabIcon
                            isOpen={isOpen}
                            currentTab={tabChoose}
                            tabName={tabNames[index]}

                            icon={icon}
                            index={index}
                            onClick={() => navigateTab(index)}
                        />
                    ))
                }

                <BottomTab isOpen={isOpen} />


            </button>
        </Box>
    )
}


export default LeftNavigation;
