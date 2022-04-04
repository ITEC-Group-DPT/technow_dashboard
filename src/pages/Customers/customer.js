import React, { useState, useEffect } from 'react'
import { 
    Box,
    Container,
    Grid,
    Typography,
    Divider
} from '@mui/material'
import SearchBar from '../../components/SearchBar/searchBar'
import SortByTime from '../../components/SortByTime/sortByTime'
import Pagination from '../../components/Pagination/pagination'
import color from '../../constant/color'
import AreaChart from '../../components/AreaChart/areaChart'

// import axios from 'axios'
// import { BASE_API_URL, TEST_API_URL } from '../constant/string';

// import { getUserListAPI } from '../../api/userApi'

const dataAreaChart = [
    {
        month: 'Jan',
        users: 70,
    },
    {
        month: 'Feb',
        users: 180,
    },
    {
        month: 'Mar',
        users: 200,
    },
    {
        month: 'Apr',
        users: 415,
    },
    {
        month: 'May',
        users: 390,
    },
    {
        month: 'Jun',
        users: 490,
    },
];

const dataTable = [
    {
        rank: 1,
        username: 'Tri Minh Quan',
        amount: 12221000
    },
    {
        rank: 2,
        username: 'minhdaongtr',
        amount: 102000000
    },
    {
        rank: 3,
        username: 'phutruong123',
        amount: 79000000
    },
    {
        rank: 4,
        username: 'cuongvl',
        amount: 47000000
    },
    {
        rank: 5,
        username: 'longtran',
        amount: 18221000
    },
    {
        rank: 6,
        username: 'vanana111',
        amount: 10221000
    },
    {
        rank: 7,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 8,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 9,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 10,
        username: 'chelinh',
        amount: 9221000
    }
];

const Customers = () => {

    // const [userList, updateUserList] = useState({"isLoading": true});
    const [initialsort, setSort] = useState("month");
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
    const [userList, setUserList] = useState([]);
    const [search, setSearch] = useState("");
    const itemsPerPage = 5
    const offset = (page - 1) * itemsPerPage
    // useEffect(() => {
    //     getUserListAPI().then((response) => {
	// 		if (response.data.success === true) {
	// 			updateUserList({ "isLoading": false, data: response.data.data })
	// 			console.log("userList ", response.data)
	// 		}
    //     })
    // }, [])

    useEffect(() => {
        //call getTotalPage API here
        setTotalPage(3)
    }, [])

    useEffect(() => {
        //call getOrderList with offset API here
        setUserList(dataTable.slice(offset, offset + itemsPerPage))
    }, [page, initialsort])

    // const formatPrice = (value) => {
	// 	return new Intl.NumberFormat('vi-VN', {
	// 		style: 'currency',
	// 		currency: '₫',
	// 	}).format(value)
	// }

    return (
        <Box
            style={{
                height: "100vh",
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
                                data={dataAreaChart}
                                xAxisName="month"
                                yAxisName="users"
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
                                data={dataAreaChart}
                                xAxisName="month"
                                yAxisName="users"
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
                        <Box style={{display: "block", background: color.white, paddingTop: "20px", borderRadius: '15px'}}>
                            <Container>
                                <Box>
                                    <SearchBar placeholder="Search for username..."
                                                text={search}
                                                setText={setSearch} />
                                </Box>
                            </Container>
                            <Box style={{ paddingLeft: "50px", paddingTop: "20px", paddingBottom: "20px"}}>
                                <Grid container spacing={1}>
                                    <Grid item lg={3}>
                                        <Typography style={{ fontWeight: 600}}>Rank</Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Typography>Username</Typography>
                                    </Grid>
                                    <Grid item lg={5}>
                                        <Typography>Purchase Amount</Typography>
                                    </Grid>
                                </Grid>
                            <Divider style={{ marginTop: '20px'}}/>
                            </Box>
                            {dataTable.map(user => 
                                <Box style={{ paddingLeft: "50px", paddingTop: "15px", paddingBottom: "10px"}}>
                                    <Grid container spacing={1}>
                                        <Grid item lg={3}>
                                            <Typography>{user.rank}</Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography>{user.username}</Typography>
                                        </Grid>
                                        <Grid item lg={5}>
                                            <Typography>{user.amount}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '10px'}}>
                                <Pagination page={page} maxPages={totalPage} 
                                    onBack={() => {
                                        if (page > 1)
                                            setPage(page - 1)
                                    }}
                                    onForward={() => {
                                        if (page < totalPage)
                                            setPage(page + 1)
                                    }}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            

        </Box>
    )
}

export default Customers