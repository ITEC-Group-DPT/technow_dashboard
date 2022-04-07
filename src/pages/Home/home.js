import React, { useState, useEffect } from 'react'

import {
    mockBannerData,
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

//API & Data
import { getOverallStatistic, getDashboardDataByTime } from '../../api/homeAPI'


const Home = () => {

    const [filterTime, setFilterTime] = useState("Month");
    const [bannerData, setBannerData] = useState(mockBannerData);
    const [homeStat, setHomeStat] = useState({
        sale: salesSection,
        order: ordersSection,
        item: productsSection,
        customer: customersSection,
    });

    const getBannerData = async () => {
        const response = await getOverallStatistic();

        console.log('response home:', response);
        if (response.data.success) {
            const data = response.data.data;

            let formatData = data;
            console.log('data: ', data);
            formatData['totalSales'] = (data['totalSales'] / (1000000)).toFixed(1);

            setBannerData(formatData)
        }

    }

    const getAllHomeStat = async () => {
        const response = await getDashboardDataByTime(filterTime);

        if (response.data.success) {
            const data = response.data.data;

            setHomeStat(data);
        }

    }

    useEffect(() => {
        getAllHomeStat()
    }, [filterTime]);


    useEffect(() => {
        getBannerData();
        getAllHomeStat();
    }, []);
    return (
        <Box className='homeAdmin' sx={styles.main}>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={styles.pageTitle}>Admin Dashboard</Typography>

                <SortByTime
                    sortList={["Day", "Month", "Year"]}
                    onChangeValue={setFilterTime}
                />
            </Box>

            <BannerHome
                data={bannerData}
            />

            <Box sx={styles.sectionRow}>
                <StatHome
                    title="Sales"
                    subTitle={filterTime == "Day" ? "Today" : `This ${filterTime}`}
                    style={{
                        marginRight: "12px",
                        background: "#FFEEE2"
                    }}
                    stat={homeStat.sale}
                    background="#FFEEE2"
                />

                <StatHome
                    title="Products"
                    subTitle={`Solds`}
                    style={{
                        marginLeft: "13px",
                        background: "#E0FFE7"
                    }}
                    stat={homeStat.item}
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
                    stat={homeStat.order}
                />

                <StatHome
                    title="Customers"
                    subTitle={`Visited`}
                    style={{
                        marginLeft: "12px",
                        background: "#ECECEC"
                    }}
                    stat={homeStat.customer}
                />
            </Box>

        </Box >
    )
}



export default Home