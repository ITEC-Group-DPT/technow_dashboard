import React from 'react'

import styles from "./bannerHome.style"
import { TotalSalesIc, TotalOrdersIc, TotalUsersIc } from "../../constant/icon"

import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const BannerHome = ({data}) => {
    return (
        <Box sx={styles.banner}>

            {/* Total Sales Section  */}
            <Box sx = {styles.statBox}>
                <img src={TotalSalesIc}/>
                <Typography sx = {styles.statTitle}>Totals Sales</Typography>
                <Typography sx = {styles.statData}>{data.totalSales}</Typography>
                <Typography sx = {styles.statUnit}>tỉ đồng</Typography>
            </Box>

            {/* Total Orders Section */}
            <Box sx = {styles.statBox}>
                <img src={TotalOrdersIc}/>
                <Typography sx = {styles.statTitle}>Totals Orders</Typography>
                <Typography sx = {styles.statData}>{data.totalOrders}</Typography>
                <Typography sx = {styles.statUnit}>đơn hàng</Typography>
            </Box>

            {/* Total Users Section */}
            <Box sx = {styles.statBox}>
                <img src={TotalUsersIc}/>
                <Typography sx = {styles.statTitle}>Totals Users</Typography>
                <Typography sx = {styles.statData}>{data.totalUsers}</Typography>
                <Typography sx = {styles.statUnit}>tài khoản</Typography>
            </Box>
        </Box>
    )
}

export default BannerHome