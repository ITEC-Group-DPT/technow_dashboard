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
    getOrderByPage,
    getOrderByFilter,
} from '../../api/orderReportAPI'

const Orders = () => {
    const [barChartData, setBarChartData] = useState([])
    const [lineChartData, setLineChartData] = useState([])
    const [orderList, setOrderList] = useState([])
    const [sort, setSort] = useState("Month")
    const [search, setSearch] = useState("")
    const [sortByStatus, setSortByStatus] = useState("All")
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)

    const itemsPerPage = 5

    const handleChangePage = (direction) => {
        let newPage = page

        if (direction == "back" && page > 1)
            newPage = page - 1
        else if (direction == "forward" && page < totalPage)
            newPage = page + 1

        const offset = (newPage - 1) * itemsPerPage

        if (newPage != page) {
            getOrderByPage(search, sortByStatus, offset, itemsPerPage).then(response => {
                if (response.data.success === true) {
                    const data = response.data.data
                    console.log("order list (PAGINATION): ", data.orderList)

                    setPage(newPage)
                    setOrderList(data.orderList)
                }
            })
        }
    }

    const handleChangeSortByStatus = (status) => {
        getOrderByFilter(search, status).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                const totalPage = Math.ceil(data.total / itemsPerPage)
                console.log("total page (SORT): ", totalPage)
                console.log("order list (SORT): ", data.orderList)

                setSortByStatus(status)
                setTotalPage(totalPage)
                setPage(1)
                setOrderList(data.orderList)
            }
        })
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            getOrderByFilter(search, sortByStatus).then(response => {
                if (response.data.success === true) {
                    const data = response.data.data
                    const totalPage = Math.ceil(data.total / itemsPerPage)
                    console.log("total page (SEARCH): ", totalPage)
                    console.log("order list (SEARCH): ", data.orderList)

                    setTotalPage(totalPage)
                    setPage(1)
                    setOrderList(data.orderList)
                }
            })
        }, 500)
        return () => clearTimeout(delay)

    }, [search])

    useEffect(() => {
        getOrderSummary(sort).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                console.log("barChartData: ", data)
                setBarChartData(data)
            }
        })

        getIncomeSummary(sort).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                console.log("lineChartData: ", data)
                setLineChartData(data)
            }
        })
    }, [sort])

    useEffect(() => {
        getOrderByFilter(search, sortByStatus).then(response => {
            if (response.data.success === true) {
                const data = response.data.data
                const totalPage = Math.ceil(data.total / itemsPerPage)
                console.log("total page (ON PAGE LOAD): ", totalPage)
                console.log("order list (ON PAGE LOAD): ", data.orderList)

                setTotalPage(totalPage)
                setOrderList(data.orderList)
            }
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box sx={styles.bg}>
            <Container maxWidth="md" sx={styles.main}>
                <Box sx={styles.title1Wrapper}>
                    <Typography sx={styles.title}>Order Report</Typography>
                    <SortByTime
                        onChangeValue={value => setSort(value)}
                        sortList={["Day", "Month", "Year"]}
                    />
                </Box>
                <Grid container spacing={6} sx={styles.graphContent}>
                    <Grid item xs={6}>
                        <Box className="font-weight-graph" sx={styles.graphWrapper}>
                            <Box sx={{ mb: 4 }}>
                                <Typography sx={styles.graphTitle}>Total Orders</Typography>
                            </Box>
                            <BarChart
                                data={barChartData}
                                xAxisName="key"
                                yAxisName="orders"
                                yAxisCount={6}
                                width={480}
                                height={280}
                                barSize={40}
                                barColor={color.orange}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="font-weight-graph" sx={styles.graphWrapper}>
                            <Grid container sx={{ mb: 4 }}>
                                <Grid item xs={4} sx={styles.labelWrapper}>
                                    <Typography sx={styles.label} >(million VND)</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={styles.graphTitle}>Total Value</Typography>
                                </Grid>
                            </Grid>
                            <LineChart
                                data={lineChartData}
                                xAxisName="key"
                                yAxisName="income"
                                yAxisCount={6}
                                width={470}
                                height={280}
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
                                placeholder="Search for order ID, customer name..."
                                text={search}
                                setText={setSearch}
                                width="100%"
                            />
                        </Grid>
                        <Grid item xs={3.5} style={styles.centerHori}>
                            <SortByStatus
                                onChangeValue={handleChangeSortByStatus}
                            />
                        </Grid>
                        <Grid item xs={2} style={styles.endHori}>
                            <Pagination
                                page={page}
                                maxPages={totalPage}
                                onBack={() => handleChangePage("back")}
                                onForward={() => handleChangePage("forward")}
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
                            />
                        ))}

                        {orderList.length != 0 ? ("") :
                            (
                                <Typography sx={styles.searchNotFound}  >
                                    No orders found
                                </Typography>
                            )
                        }


                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Orders