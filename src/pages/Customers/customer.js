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

import { getLeaderboardData, getActiveUsers, getVisitedUsers, getChartsData } from '../../api/customerStatistic'

const Customers = () => {
    const [sortTime, setSort] = useState("month");
    const [leaderboard, updateLeaderboard] = useState([]);
    const [activeUsers, updateActiveUsers] = useState([]);
    const [visitedUsers, updateVisitedUsers] = useState([]);
    const [xName, setX] = useState("month");
    const [yName, setY] = useState("users");

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
            if (response.data.success === true) {
                setX(Object.keys(JSON.parse(response.data.data).active[0])[0]);
                setY(Object.keys(JSON.parse(response.data.data).active[0])[1]);
				updateActiveUsers(JSON.parse(response.data.data).active);
				updateVisitedUsers(JSON.parse(response.data.data).visited);
			}
        })
    }, [sortTime])

    return (
        <Box
            style={{
                minHeight: "100vh",
                background: color.background
            }}
        >
            <Container sx={{ py: "52px"}}>
                <Box style={{display: "flex", justifyContent: "space-between"}}>
                    <Grid container spacing={2}>
                        <Grid item lg={4}>
                            <Typography style={{ fontSize: "32px", fontWeight: 700, textAlign: "left", marginBottom: "1rem"}}>User Statistic</Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <SortByTime onChangeValue={value => setSort(value)} />
                        </Grid>
                    </Grid>


                </Box>     
                <Grid container spacing={10}>
                    <Grid item lg={6}>

                        <Box style={{marginBottom: "2rem", background: color.white, borderRadius: "15px", paddingLeft: "45px"}}>
                            <Box>
                                <Typography style={{ fontSize: "22px", fontWeight: 500, textAlign: "center", paddingTop: "10px", paddingBottom: "10px"}}>Guest Visited</Typography>
                            </Box>
                            <AreaChart 
                                data={visitedUsers}
                                xAxisName={xName}
                                yAxisName={yName}
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.yellow}
                                areaColor={color.lightYellow}
                                style={{ fontSize: "13px"}}
                            />
                        </Box>
                        
                        <Box style={{marginBottom: "2rem", background: color.white, borderRadius: "15px", paddingLeft: "45px"}}>
                            <Box>
                                <Typography style={{ fontSize: "22px", fontWeight: 500, textAlign: "center", paddingTop: "10px", paddingBottom: "10px"}}>Active Users</Typography>
                            </Box>
                            <AreaChart
                                data={activeUsers}
                                xAxisName={xName}
                                yAxisName={yName}
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.green}
                                areaColor={color.lightGreen}
                                style={{ fontSize: "13px"}}
                            />
                        </Box>
                        
                    </Grid>
                    <Grid item lg={6}>
                        <TableUser data={leaderboard}/>
                    </Grid>
                </Grid>
            </Container>

            

        </Box>
    )
}

export default Customers