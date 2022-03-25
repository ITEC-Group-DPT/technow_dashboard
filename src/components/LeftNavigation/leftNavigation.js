import React, { useState, useEffect } from 'react'

//MUI
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '@mui/base/ButtonUnstyled';

//component 
import TabIcon from './tabIcon'
import BottomTab from './bottomTab';
import OpenNav from "./openNav"

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
    const location = useLocation();

    const [tabChoose, setTabChoose] = useState();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setTabChoose(0)
                break;
            case "/sales":
                setTabChoose(1)
                break;
            case "/products":
                setTabChoose(2)
                break;
            case "customers":
                setTabChoose(3)
                break;
            case "/orders":
                setTabChoose(4)
                break;

            default:
                break;
        }
    }, []);
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
                style={styles.navigation}
                onMouseEnter={() => onControlOpen(true)}
                onMouseLeave={() => onControlOpen(false)}
            >
                <Box
                    style={!isOpen ? styles.container : styles.openMiniContainer}
                >

                    <img style={styles.avatar} src={DefaultAvaIc} />

                    {
                        tabIcon.map((icon, index) => (
                            <TabIcon
                                currentTab={tabChoose}
                                tabName={tabNames[index]}

                                icon={icon}
                                index={index}
                                onClick={() => navigateTab(index)}
                            />
                        ))
                    }

                    <BottomTab />


                </Box>
                {
                    isOpen &&
                    <OpenNav
                        tabNames={tabNames}
                        currentTab={tabChoose}
                        navigateTab={navigateTab}
                    />
                }
            </button>
        </Box>
    )
}


export default LeftNavigation;
