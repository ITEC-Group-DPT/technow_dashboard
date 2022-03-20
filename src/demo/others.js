import React, { useState } from 'react'


import { Box } from '@mui/system'
import { Typography } from '@mui/material';

import color from '../constant/color';

//component
import SortByTime from "../components/SortByTime/sortByTime"
import SearchBar from '../components/SearchBar/searchBar';
import Pagination from '../components/Pagination/pagination';

const OtherDemo = () => {

    const [sortValue, setSortValue] = useState("Month");
    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);
    const maxPages = 3;

    return (
        <Box
            sx={styles.sortContainer}
        >
            {/* sort by time demo */}
            <SortByTime
                onChangeValue={value => setSortValue(value)}
            />

            <Typography><b>Choose Sort:</b> {sortValue}</Typography>
            <br />

            {/* search demo */}

            <Box sx={styles.searchContainer}>
                <SearchBar
                    text={search}
                    setText={setSearch}
                    width={350}
                />
            </Box>

            <Typography><b>Search Text:</b> {search}</Typography>

            <br />
            {/* pagination demo */}

            <Pagination
                page={page}

                // default maxPages = 3
                maxPages={maxPages}

                onBack={() => {
                    if (page > 1)
                        setPage(page - 1);
                }}

                onForward={() => {
                    if (page < maxPages)
                        setPage(page + 1);
                }}
            />

            <br />
            <Typography><b>Current Page:</b> {page}</Typography>

        </Box>
    )
}

const styles = {
    sortContainer: {
        pt: 3,
        background: color.background,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    searchContainer: {
        px: 1,

        mb: 1,
    },
}
export default OtherDemo;