import {
    Box,
    Container,
    Grid,
    Typography,
    Divider
} from '@mui/material'
import SearchBar from '../../components/SearchBar/searchBar'
import Pagination from '../../components/Pagination/pagination'
import SortPurchased from './sortPurchased'
import React, { useState, useEffect } from 'react'

import Style from './customer.style'

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

    const formatPrice = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value)
    }

    const formatRankColor = (value) => {
        switch (value) {
            case 1: {
                return Style.firstRank;
            };
            case 2: {
                return Style.secondRank;
            };
            case 3: {
                return Style.thirdRank;
            };
            default: return Style.noRank;
        }
    }

    return (
        <Box sx={Style.leaderboard}>
            <Container>
                <Box sx={{ mt: "16px", mb: "20px", ml: "14px" }}>
                    <SearchBar
                        width='100%'
                        placeholder="Search for username..."
                        text={search}
                        setText={setSearch} />
                </Box>
            </Container>
            <Box style={Style.boardTitle}>
                <Grid container spacing={1}>
                    <Grid item lg={3} md={3}>
                        <Typography style={{ fontWeight: 600 }}>Rank</Typography>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <Typography style={{ fontWeight: 600 }}>Username</Typography>
                    </Grid>
                    <Grid item lg={5} md={5}>
                        <SortPurchased onChangeValue={value => setPurchasedSort(value)} />
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: '10px' }} />
            </Box>
            {userList.map(user =>
                <Box style={Style.boardRow}>
                    <Grid container spacing={1}>
                        <Grid item lg={3} md={3}>
                            <Typography style={{ fontWeight: 600 }}>{user.rank}</Typography>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Typography>{user.username}</Typography>
                        </Grid>
                        <Grid item lg={5} md={5} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            paddingRight: "11%",
                        }}>
                            <Box style={formatRankColor(user.rank)}>
                                <Typography>
                                    {formatPrice(user.purchasedAmount)}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
            <Box style={Style.paginationBox}>
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