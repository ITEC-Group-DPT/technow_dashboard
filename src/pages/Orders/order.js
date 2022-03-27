import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Grid } from '@mui/material'
import styles from './order.style'
import './order.css'
import color from '../../constant/color'
import SortByTime from '../../components/SortByTime/sortByTime'
import BarChart from '../../components/BarChart/barChart'
import LineChart from '../../components/LineChart/lineChart'

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

const Orders = () => {
    return (
        <Box sx={styles.bg}>
            <Container maxWidth="md" sx={styles.main}>
                <Box sx={styles.title1Wrapper}>
                    <Typography sx={styles.title1}>Order Report</Typography>
                    <SortByTime />
                </Box>

                <Grid container spacing={4} sx={styles.graphContent}>
                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                            <Typography sx={styles.graphTitle}>Total Orders</Typography>
                            <BarChart
                                data={dataBarChart}
                                xAxisName="month"
                                yAxisName="orders"
                                yAxisCount={6}
                                width={400}
                                height={270}
                                barSize={45}
                                barColor={color.orange}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={styles.graphWrapper}>
                        <Typography sx={styles.graphTitle}>Total Income</Typography>
                            <LineChart
                                data={dataLineChart}
                                xAxisName="month"
                                yAxisName="income"
                                yAxisCount={6}
                                width={400}
                                height={270}
                                lineColor={color.blue}
                            />
                        </Box>
                    </Grid>
                </Grid>


            </Container>
        </Box>
    )
}

export default Orders