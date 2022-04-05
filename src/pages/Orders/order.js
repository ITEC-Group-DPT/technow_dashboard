import React, { useState, useEffect } from 'react'
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import styles from './order.style'
import './order.css'
import color from '../../constant/color'
import SortByTime from '../../components/SortByTime/sortByTime'
import BarChart from '../../components/BarChart/barChart'
import LineChart from '../../components/LineChart/lineChart'
import SearchBar from '../../components/SearchBar/searchBar'
import Pagination from '../../components/Pagination/pagination'
import SortByStatus from '../../components/SortByStatus/sortByStatus'
import OrderItem from '../../components/OrderItem/orderItem'
import {
    getOrderSummary,
    getIncomeSummary,
    getOrderTotalPage,
    getOrderListByPage,
} from '../../api/orderReportAPI'

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
]

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
]

const dataOrder = [
    //page 1
    {
        id: 'HLS1293',
        cusName: 'Quan Minh Tri',
        date: '15/01/2022',
        price: '3,210,000 đ',
        status: 1,
    },
    {
        id: 'AKT9023',
        cusName: 'Tran Nguyen Minh Dao',
        date: '07/01/2022',
        price: '799,000 đ',
        status: 2,
    },
    {
        id: 'VED0054',
        cusName: 'Truong Minh Nam Phu',
        date: '02/01/2022',
        price: '1,500,000 đ',
        status: 3,
    },
    {
        id: 'MNI6381',
        cusName: 'Tran Ngoc Hien Long',
        date: '10/12/2021',
        price: '1,990,000 đ',
        status: 4,
    },
    {
        id: 'TLA3424',
        cusName: 'Ly Vi Cuong',
        date: '05/12/2021',
        price: '12,499,000 đ',
        status: 0,
    },

    //page 2
    {
        id: 'CLG1035',
        cusName: 'Nguyen Van An',
        date: '01/12/2021',
        price: '10,990,000 đ',
        status: 4,
    },
    {
        id: 'DLK2781',
        cusName: 'Nguyen Ngoc Minh Thu',
        date: '22/11/2021',
        price: '590,000 đ',
        status: 2,
    },
    {
        id: 'TKL1001',
        cusName: 'Tran Thi Thu Trang',
        date: '20/11/2021',
        price: '2,500,000 đ',
        status: 4,
    },
    {
        id: 'BBC1419',
        cusName: 'Phan Quang Anh Hao',
        date: '17/11/2021',
        price: '9,990,000 đ',
        status: 2,
    },
    {
        id: 'DNB3812',
        cusName: 'Truong Ngoc Quang Minh',
        date: '11/10/2021',
        price: '2,490,000 đ',
        status: 0,
    },

    //page 3
    {
        id: 'PQC1592',
        cusName: 'Ly Van Tai',
        date: '02/10/2021',
        price: '200,000 đ',
        status: 1,
    },
    {
        id: 'PQJ1178',
        cusName: 'Pham Thi Anh Dung',
        date: '30/09/2021',
        price: '690,000 đ',
        status: 3,
    },
    {
        id: 'DPC4921',
        cusName: 'Phi Thu Lan',
        date: '23/09/2021',
        price: '1,590,000 đ',
        status: 2,
    },
]

const Orders = () => {
    const [barChartData, setBarChartData] = useState([])
    const [lineChartData, setLineChartData] = useState([])
    const [orderList, setOrderList] = useState([])
    const [sort, setSort] = useState("month")
    const [search, setSearch] = useState("")
    const [sortByStatus, setSortByStatus] = useState("All")
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)

    const itemsPerPage = 10
    const offset = (page - 1) * itemsPerPage

    const toMonthName = (monthNumber) => {
        const date = new Date()
        date.setMonth(monthNumber - 1)
        return date.toLocaleString('en-US', { month: 'short' })
    }

    useEffect(() => {
        //call getTotalPage API here

        getOrderSummary(sort).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                data.forEach((item, index) => {
                    data[index].month = toMonthName(data[index].month)
                })
                console.log("barChartData: ", data)
                setBarChartData(data)
            }
        })

        getIncomeSummary(sort).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                data.forEach((item, index) => {
                    data[index].month = toMonthName(data[index].month)
                })
                console.log("lineChartData: ", data)
                setLineChartData(data)
            }
        })

        getOrderTotalPage().then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                const total = Math.ceil(data.total / itemsPerPage)
                console.log("totalPage: ", total)
                setTotalPage(total)
            }
        })

        getOrderListByPage("All", offset, itemsPerPage).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                console.log("orderListByPage: ", data)
                setOrderList(data)
            }
        })
    }, [page, sort])

    useEffect(() => {
        //call getOrderList with offset API here
        // setOrderList(dataOrder.slice(offset, offset + itemsPerPage))
    }, [page, sort])

    const onChangeStatus = (orderID, status) => {
        console.log(orderID + " : " + status)
    }

    return (
        <Box sx={styles.bg}>
            <Container maxWidth="md" sx={styles.main}>
                <Box sx={styles.title1Wrapper}>
                    <Typography sx={styles.title}>Order Report</Typography>
                    <SortByTime onChangeValue={value => setSort(value)} />
                </Box>
                <Grid container spacing={6} sx={styles.graphContent}>
                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                            <Box sx={{ mb: 4 }}>
                                <Typography sx={styles.graphTitle}>Total Orders</Typography>
                            </Box>
                            {barChartData.length > 0 &&
                                <BarChart
                                    data={barChartData}
                                    xAxisName="month"
                                    yAxisName="orders"
                                    yAxisCount={6}
                                    width={430}
                                    height={270}
                                    barSize={45}
                                    barColor={color.orange}
                                />
                            }
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                            <Grid container sx={{ mb: 4 }}>
                                <Grid item xs={4} sx={styles.labelWrapper}>
                                    <Typography sx={styles.label} >(million VND)</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={styles.graphTitle}>Total Income</Typography>
                                </Grid>
                            </Grid>
                            {lineChartData.length > 0 &&
                                <LineChart
                                    data={lineChartData}
                                    xAxisName="month"
                                    yAxisName="income"
                                    yAxisCount={6}
                                    width={430}
                                    height={270}
                                    lineColor={color.blue}
                                />
                            }
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
                                width="100%"
                            />
                        </Grid>
                        <Grid item xs={3.5} style={styles.centerHori}>
                            <SortByStatus
                                onChangeValue={setSortByStatus}
                            />
                        </Grid>
                        <Grid item xs={2} style={styles.endHori}>
                            <Pagination
                                page={page}
                                maxPages={totalPage}
                                onBack={() => {
                                    if (page > 1)
                                        setPage(page - 1)
                                }}
                                onForward={() => {
                                    if (page < totalPage)
                                        setPage(page + 1)
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
                                <Typography
                                    sx={{ ...styles.tableHeader, ...styles.textCenter }}
                                >
                                    Order Date
                                </Typography>
                            </Grid>
                            <Grid item xs={2.5} sx={styles.priceHeaderItem} >
                                <Box sx={styles.priceHeaderWrapper}>
                                    <Typography
                                        sx={{ ...styles.tableHeader, ...styles.priceHeader }}
                                    >
                                        Total Price
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Typography
                                    sx={{ ...styles.tableHeader, ...styles.textEnd }}
                                >
                                    Delivery Status
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={styles.divider} />

                        {orderList.map((order) => (
                            <OrderItem
                                order={order}
                                key={order.id}
                                onChangeStatus={(orderID, status) => onChangeStatus(orderID, status)}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Orders