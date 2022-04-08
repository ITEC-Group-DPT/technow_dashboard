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
        getChartsData(sortTime).then((response) => {
            console.log('sort time: ', sortTime);
            console.log("sort by time: ", response.data);

            if (response.data.success === true) {
                const data = response.data.data;

                setX(Object.keys(data.visited[0])[0]);
                updateActiveUsers(data.active);
                updateVisitedUsers(data.visited);
            }
        })
        getLeaderboardData(sortTime).then((response) => {
            if (response.data.success === true) {
                updateLeaderboard(response.data.data);
                console.log("leaderboardData ", response.data);
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
            <Container className='container' sx={{ py: 5, paddingLeft: '108px !important', maxWidth: '1300px !important' }}>
                <Box sx={styles.titleWrapper}>
                    <Typography style={styles.title}>User Statistic</Typography>
                    <SortByTime onChangeValue={value => setSort(value)} />
                </Box>

                <Grid container spacing={9} sx={{ height: '820px' }}>
                    <Grid item xs={6} sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
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

                        <Box className="chart" sx={{ ...styles.chart, mb: 0 }}>
                            <Box>
                                <Typography style={styles.chartTitle}>Account Created</Typography>
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

                    <Grid item xs={6} sx={{ height: '100%' }}>
                        <TableUser
                            data={leaderboard}
                        />
                    </Grid>
                </Grid>

            </Container>



        </Box>
    )
}

export default Customers