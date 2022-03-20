import React, { useState } from 'react'


import { Box } from '@mui/system'
import { Typography } from '@mui/material';

import color from '../constant/color';

//component
import SortByTime from "../components/SortByTime/sortByTime"
import SearchBar from '../components/SearchBar/searchBar';

const OtherDemo = () => {

    const [sortValue, setSortValue] = useState("Month");
    const [search, setSearch] = useState("");

    return (
        <Box
            sx={styles.sortContainer}
        >
            <SortByTime
                onChangeValue={value => setSortValue(value)}
            />

            <Typography><b>Choose Sort:</b> {sortValue}</Typography>
            <br />

            <Box sx={styles.searchContainer}>
                <SearchBar
                    text={search}
                    setText={setSearch}
                    width={350}
                />
            </Box>

            <Typography><b>Search Text:</b> {search}</Typography>

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
        background: "white",
        display: "flex",
        flexDirection: "column",

        py: 1,
        px: 1,

        mb: 1,
    },
}
export default OtherDemo;