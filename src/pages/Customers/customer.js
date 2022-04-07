import React, { useState, useEffect } from 'react'
import {
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material'
import color from '../../constant/color'
import SortByTime from '../../components/SortByTime/sortByTime'
import TableUser from './tableUser'
import AreaChart from '../../components/AreaChart/areaChart'
import { getLeaderboardData, getChartsData } from '../../api/customerStatistic'

import './customer.css'
import styles from './customer.style'

const Customers = () => {
    const [sortTime, setSort] = useState("month");
    const [leaderboard, updateLeaderboard] = useState([]);
    const [activeUsers, updateActiveUsers] = useState([]);
    const [visitedUsers, updateVisitedUsers] = useState([]);
    const [xName, setX] = useState("month");

    useEffect(() => {
        getLeaderboardData().then((response) => {
            if (response.data.success === true) {
                updateLeaderboard(response.data.data);
                console.log("leaderboardData ", response.data);
            }
        })
    }, []);

    useEffect(() => {
        getChartsData(sortTime.toLowerCase()).then((response) => {
            console.log("ChartsData", response.data);
            let Cdata = JSON.parse(response.data.data);
            console.log(Cdata);
            if (response.data.success === true) {
                setX(Object.keys(Cdata.visited[0])[0]);
                updateActiveUsers(Cdata.active);
                updateVisitedUsers(Cdata.visited);
            }
        })
    }, [sortTime])

    return (
        <Box
            className='userStats'
            style={{
                minHeight: "100vh",
                background: color.background
            }}
        >
            <Container className='container' sx={{ py: "52px" }}>
                <Box style={styles.titleWrapper}>
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={4}>
                            <Typography style={styles.title}>User Statistic</Typography>
                        </Grid>
                        <Grid item lg={2} md={3}>
                            <SortByTime onChangeValue={value => setSort(value)} />
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={9}>
                    <Grid item lg={6} md={6} sx={{
                        height: "100%",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"space-between",
                    }}>
                        <Box className="chart" sx={styles.chart}>
                            <Box>
                                <Typography style={styles.chartTitle}>Guest Visited</Typography>
                            </Box>
                            <AreaChart
                                data={visitedUsers}
                                xAxisName={xName}
                                yAxisName="guests"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.yellow}
                                areaColor={color.lightYellow}
                                style={{ fontSize: "13px" }}
                            />
                        </Box>

                        <Box className="chart" sx={{...styles.chart, mb: 0}}>
                            <Box>
                                <Typography style={styles.chartTitle}>Active Users</Typography>
                            </Box>
                            <AreaChart
                                data={activeUsers}
                                xAxisName={xName}
                                yAxisName="users"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.green}
                                areaColor={color.lightGreen}
                                style={{ fontSize: "13px" }}
                            />
                        </Box>

                    </Grid>
                    <Grid item lg={6} md={6}>
                        <TableUser data={leaderboard} />
                    </Grid>
                </Grid>
            </Container>



        </Box>
    )
}

export default Customers