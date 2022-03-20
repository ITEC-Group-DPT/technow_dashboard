import React, { useState } from 'react'


import { Box } from '@mui/system'
import { Typography } from '@mui/material';

import color from '../constant/color';
import SortByTime from "../components/SortByTime/sortByTime"

const OtherDemo = () => {

    const [sortValue, setSortValue] = useState("Month");

    return (
        <Box
            sx={{
                pt: 3,
                background: color.background,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >

            <SortByTime
                onChangeValue={value => setSortValue(value)}
            />

            <Typography><b>Choose Sort:</b> {sortValue}</Typography>

        </Box>
    )
}
export default OtherDemo;