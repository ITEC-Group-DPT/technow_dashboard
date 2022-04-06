import {
    Box,
    Container,
    Grid,
    Typography,
    Divider
} from '@mui/material'
import color from '../../constant/color'
import SearchBar from '../../components/SearchBar/searchBar'
import Pagination from '../../components/Pagination/pagination'
import SortPurchased from './sortPurchased'
import React, { useState, useEffect } from 'react'

const dataTable = [
    {
        rank: 1,
        username: 'Tri Minh Quan',
        purchasedAmount: 12221000
    },
    {
        rank: 2,
        username: 'minhdaongtr',
        purchasedAmount: 102000000
    },
    {
        rank: 3,
        username: 'phutruong123',
        purchasedAmount: 79000000
    },
    {
        rank: 4,
        username: 'cuongvl',
        purchasedAmount: 47000000
    },
    {
        rank: 5,
        username: 'longtran',
        purchasedAmount: 18221000
    },
    {
        rank: 6,
        username: 'vanana111',
        purchasedAmount: 10221000
    },
    {
        rank: 7,
        username: 'chelinh',
        purchasedAmount: 9221000
    },
    {
        rank: 8,
        username: 'chelinh',
        purchasedAmount: 9221000
    },
    {
        rank: 9,
        username: 'chelinh',
        purchasedAmount: 9221000
    },
    {
        rank: 10,
        username: 'chelinh',
        purchasedAmount: 9221000
    }
];
const TableUser = ({ data }) => {

    const [userList, setUserList] = useState(data);
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);
    const [purchasedSort, setPurchasedSort] = useState("Top Purchased");
    const [search, setSearch] = useState("");

    const itemsPerPage = 10;
    const offset = (page - 1) * itemsPerPage;

    useEffect(() => {
        setTotalPage(2);
        setUserList(data.slice(offset, offset + itemsPerPage));
    }, [page, data])

    useEffect(() => {
        setUserList(data.reverse().slice(offset, offset + itemsPerPage));
    }, [purchasedSort])

    // const formatPrice = (value) => {
    // 	return new Intl.NumberFormat('vi-VN', {
    // 		style: 'currency',
    // 		currency: '₫',
    // 	}).format(value)
    // }

    return (
        <Box style={{ display: "block", background: color.white, paddingTop: "20px", borderRadius: '15px', minHeight: "90vh" }}>
            <Container>
                <Box>
                    <SearchBar
                        width='100%'
                        placeholder="Search for username..."
                        text={search}
                        setText={setSearch} />
                </Box>
            </Container>
            <Box style={{ paddingLeft: "50px", paddingTop: "20px", paddingBottom: "20px" }}>
                <Grid container spacing={1}>
                    <Grid item lg={3}>
                        <Typography style={{ fontWeight: 600 }}>Rank</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography style={{ fontWeight: 600 }}>Username</Typography>
                    </Grid>
                    <Grid item lg={5}>
                        <SortPurchased onChangeValue={value => setPurchasedSort(value)} />
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: '10px' }} />
            </Box>
            {userList.map(user =>
                <Box style={{ paddingLeft: "60px", paddingTop: "15px", paddingBottom: "10px"}}>
                    <Grid container spacing={1}>
                        <Grid item lg={3}>
                            <Typography>{user.rank}</Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Typography>{user.username}</Typography>
                        </Grid>
                        <Grid item lg={5}>
                            <Typography>{user.purchasedAmount}</Typography>

                        </Grid>
                    </Grid>
                </Box>
            )}
            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
                <Pagination page={page} maxPages={totalPage}
                    onBack={() => {
                        if (page > 1)
                            setPage(page - 1)
                    }}
                    onForward={() => {
                        if (page < totalPage)
                            setPage(page + 1)
                    }} />
            </Box>
        </Box>
    )
}

export default TableUser