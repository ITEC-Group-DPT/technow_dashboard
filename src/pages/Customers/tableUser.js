import {
    Box,
    Container,
    Grid,
    Typography,
    Divider
} from '@mui/material'
import SearchBar from '../../components/SearchBar/searchBar'
import CenterPagination from './centerPagination'
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
        console.log('allUser: ', allUser);
    }, [allUser]);

    useEffect(() => {
        setAllUser(data);
        setSearch("");
        setPurchasedSort("Top Purchased");
        setPage(1)
        console.log('data: ', data);
    }, [data]);


    const handleSortPrice = (value) => {
        setPurchasedSort(value)

        const sortedList = (value == "Top Purchased" ?
            allUser[0].rank > allUser[1].rank
            : allUser[0].rank < allUser[1].rank)
            ? JSON.parse(JSON.stringify(allUser.reverse()))
            : allUser

        setAllUser(sortedList);
    }



    const handleSearch = (value) => {
        setSearch(value);
        setPage(1)

        console.log('search: ', value);

        const searchList = data.filter(user =>
            (user.username).toUpperCase().includes(value.toUpperCase())
        );

        console.log('search list: ', searchList);

        if (searchList.length > 1) {
            const sortedList = (purchasedSort == "Top Purchased" ?
                searchList[0].rank > searchList[1].rank
                : searchList[0].rank < searchList[1].rank)
                ? JSON.parse(JSON.stringify(searchList.reverse()))
                : searchList
            setAllUser(sortedList);
            return;
        }

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

            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4, pb: 3, height: "37px" }}>
                <SearchBar
                    width='100%'
                    placeholder="Search for username..."
                    text={search}
                    setText={handleSearch} />
            </Box>

            <Box style={Style.boardTitle}>
                <Grid container spacing={1}>
                    <Grid item lg={3} md={3}>
                        <Typography style={{ fontWeight: 700, fontSize: '17px', width: 'fit-content' }}>Rank</Typography>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <Typography sx={{ fontWeight: 700, fontSize: '17px', ml: 0 }}>Username</Typography>
                    </Grid>
                    <Grid item lg={5} md={5}>
                        <SortPurchased
                            value={purchasedSort}
                            onChangeValue={handleSortPrice}
                        />
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 2, mb: 3 }} />
            </Box>
            {userList?.map(user =>
                <Box sx={Style.boardRow}>
                    <Grid container spacing={1}>
                        <Grid item lg={3} md={3}>
                            <Box sx={{ width: '36.5px' }}>
                                <Typography style={{ fontWeight: 700, textAlign: 'center' }}>{user.rank}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <Typography sx={{ ml: 0 }} >{user.username}</Typography>
                        </Grid>
                        <Grid item lg={5} md={5} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            paddingRight: "24px",
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

            {allUser.length != 0 ? ("") :
                (
                    <Typography sx={Style.searchNotFound}  >
                        No users found
                    </Typography>
                )
            }

            <Box style={Style.paginationBox}>
                <CenterPagination page={page} maxPages={totalPage}
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