import React, { useState } from 'react'

import {
    bannerData,
    salesSection,
    productsSection,
    ordersSection,
    customersSection
} from "./dummyData"

//component
import SortByTime from "../../components/SortByTime/sortByTime"
import BannerHome from '../../components/BannerHome/bannerHome'
import StatHome from '../../components/StatHome/statHome'

//MUI & design
import { Box, Typography, useMediaQuery } from '@mui/material'
import styles from "./home.style"
import "./home.css"


const Home = () => {

    const [filterTime, setFilterTime] = useState("Month");

    return (
        <Box className='homeAdmin' sx={styles.main}>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={styles.pageTitle}>Admin Dashboard</Typography>

                <SortByTime
                    onChangeValue={setFilterTime}
                />
            </Box>

            <BannerHome
                data={bannerData}
            />

            <Box sx={styles.sectionRow}>
                <StatHome
                    title="Sales"
                    subTitle={`This ${filterTime}`}
                    style={{
                        marginRight: "12px",
                        background: "#FFEEE2"
                    }}
                    stat={salesSection}
                    background="#FFEEE2"
                />

                <StatHome
                    title="Products"
                    subTitle={`Solds`}
                    style={{
                        marginLeft: "13px",
                        background: "#E0FFE7"
                    }}
                    stat={productsSection}
                />
            </Box>

            <Box sx={styles.sectionRow}>
                <StatHome
                    title="Orders"
                    subTitle={`Completed`}
                    style={{
                        marginRight: "12px",
                        background: "#E6F5F9"
                    }}
                    stat={ordersSection}
                />

                <StatHome
                    title="Customers"
                    subTitle={`Visited`}
                    style={{
                        marginLeft: "12px",
                        background: "#ECECEC"
                    }}
                    stat={customersSection}
                />
            </Box>

        </Box >
    )
}



export default Home