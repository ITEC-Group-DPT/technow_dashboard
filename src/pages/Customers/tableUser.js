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

    const [allUser, setAllUser] = useState(data);
    const [userList, setUserList] = useState();


    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);
    const [purchasedSort, setPurchasedSort] = useState("Top Purchased");
    const [search, setSearch] = useState("");

    const itemsPerPage = 10;
    const offset = (page - 1) * itemsPerPage;

    const formatedList = (list) => {
        // console.log('list: ', list);
        return list
            // .filter(user => user.purchasedAmount != 0)
            .slice(offset, offset + itemsPerPage);
    }


    useEffect(() => {
        setUserList(formatedList(allUser));
    }, [page])


    useEffect(() => {
        // console.log('userList: ', userList);
    }, [userList]);

    useEffect(() => {
        setTotalPage(Math.ceil(allUser.length / itemsPerPage));
        setUserList(formatedList(allUser))
    }, [allUser]);

    useEffect(() => {
        setAllUser(data);
        setSearch("");
        setPurchasedSort("Top Purchased");
        
        // console.log('data: ', data);
    }, [data]);


    const handleSortPrice = (value) => {
        setPurchasedSort(value)

        const sortedList = (value == "Top Purchased" ? userList[0].rank > 1 : allUser[0].rank == 1)
                ? JSON.parse(JSON.stringify(allUser.reverse()))
                : allUser

        setAllUser(sortedList);
    }


    const handleSearch = (value) => {
        setSearch(value);

        const searchList = data.filter(user => user.username.includes(value));

        setAllUser(searchList);
    }


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
                        setText={handleSearch} />
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
                        <SortPurchased
                            value={purchasedSort}
                            onChangeValue={handleSortPrice}
                        />
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: '10px' }} />
            </Box>
            {userList?.map(user =>
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