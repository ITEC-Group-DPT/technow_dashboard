import { React, useState } from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Grid, Divider } from '@mui/material'
import styles from './order.style'
import './order.css'
import color from '../../constant/color'
import SortByTime from '../../components/SortByTime/sortByTime'
import BarChart from '../../components/BarChart/barChart'
import LineChart from '../../components/LineChart/lineChart'
import SearchBar from '../../components/SearchBar/searchBar'
import Pagination from '../../components/Pagination/pagination'
import DropDownStatus from '../../components/DropDownStatus/dropDownStatus'
import OrderItem from '../../components/OrderItem/orderItem'

const dataBarChart = [
    {
        month: 'Jan',
        orders: 55,
    },
    {
        month: 'Feb',
        orders: 42,
    },
    {
        month: 'Mar',
        orders: 78,
    },
    {
        month: 'Apr',
        orders: 58,
    },
    {
        month: 'May',
        orders: 96,
    },
];

const dataLineChart = [
    {
        month: 'Jan',
        income: 25,
    },
    {
        month: 'Feb',
        income: 28,
    },
    {
        month: 'Mar',
        income: 23,
    },
    {
        month: 'Apr',
        income: 37,
    },
    {
        month: 'May',
        income: 40,
    },
];

const orderList = [
    {
        id: 'HLS1293',
        cusName: 'Quan Minh Tri',
        date: '15/01/2022',
        price: '3,210,000 đ',
        status: 'Received',
    },
    {
        id: 'AKT9023',
        cusName: 'Tran Nguyen Minh Dao',
        date: '07/01/2022',
        price: '799,000 đ',
        status: 'Processing',
    },
    {
        id: 'VED0054',
        cusName: 'Truong Minh Nam Phu',
        date: '02/01/2022',
        price: '1,500,00 đ',
        status: 'Shipping',
    },
    {
        id: 'MNI6381',
        cusName: 'Tran Ngoc Hien Long',
        date: '10/12/2021',
        price: '1,990,000 đ',
        status: 'Completed',
    },
    {
        id: 'TLA3424',
        cusName: 'Ly Vi Cuong',
        date: '05/12/2021',
        price: '12,499,000 đ',
        status: 'Cancelled',
    },
];

const Orders = () => {
    const [sort, setSort] = useState("Month")
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("All")
    const [page, setPage] = useState(1)
    const maxPages = 3

    return (
        <Box sx={styles.bg}>
            <Container maxWidth="md" sx={styles.main}>
                <Box sx={styles.title1Wrapper}>
                    <Typography sx={styles.title}>Order Report</Typography>
                    <SortByTime
                        onChangeValue={value => setSort(value)}
                    />
                </Box>

                <Grid container spacing={6} sx={styles.graphContent}>
                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                            <Box sx={{mb: 4}}>
                                <Typography sx={styles.graphTitle}>Total Orders</Typography>
                            </Box>
                            <BarChart
                                data={dataBarChart}
                                xAxisName="month"
                                yAxisName="orders"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                barSize={45}
                                barColor={color.orange}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                            <Grid container sx={{mb:4}}>
                                <Grid item xs={4} sx={styles.labelWrapper}>
                                    <Typography sx={styles.label} >(million VND)</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={styles.graphTitle}>Total Income</Typography>
                                </Grid>
                            </Grid>
                            <LineChart
                                data={dataLineChart}
                                xAxisName="month"
                                yAxisName="income"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.blue}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={styles.title2Wrapper}>
                    <Typography sx={styles.title}>Order Details</Typography>
                </Box>

                <Box sx={styles.orderContent}>
                    <Grid container sx={styles.controlWrapper}>
                        <Grid item xs={6.5} style={{ height: '100%' }}>
                            <SearchBar
                                placeholder="Search for order, customer name..."
                                text={search}
                                setText={setSearch}
                            />

                        </Grid>
                        <Grid item xs={3.5} style={styles.centerHori}>
                            <DropDownStatus
                                onChangeValue={value => setStatus(value)}
                            />
                        </Grid>
                        <Grid item xs={2} style={styles.endHori}>
                            <Pagination
                                page={page}
                                maxPages={maxPages}
                                onBack={() => {
                                    if (page > 1)
                                        setPage(page - 1);
                                }}
                                onForward={() => {
                                    if (page < maxPages)
                                        setPage(page + 1);
                                }}
                            />

                        </Grid>


                    </Grid>
                    <Box sx={styles.tableWrapper}>
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={styles.tableHeader}>Order ID</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography sx={styles.tableHeader}>Customer Name</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ ...styles.tableHeader, ...styles.textCenter }}>Order Date</Typography>
                            </Grid>
                            <Grid item xs={2.5} sx={styles.priceHeaderItem} >
                                <Box sx={styles.priceHeaderWrapper}>
                                    <Typography sx={{ ...styles.tableHeader, ...styles.priceHeader }}>Total Price</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Typography sx={{ ...styles.tableHeader, ...styles.textCenter }}>Delivery Status</Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={styles.divider} />

                        {orderList.map((order) => (
                            <OrderItem
                                order={order}
                                key={order.id}
                            />
                        ))}
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Orders