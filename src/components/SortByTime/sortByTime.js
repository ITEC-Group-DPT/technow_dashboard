import React, { useState } from 'react'
import { Box } from '@mui/system'

import { Typography, Select, FormControl, MenuItem } from '@mui/material'

import "./sortByTime.css"

const SortByTime = ({
    defaultValue = "Month",
    onChangeValue,
}) => {

    const [sortValue, setSortValue] = useState(defaultValue);

    const handleChange = (event) => {
        let value = event.target.value;

        onChangeValue(value);
        setSortValue(value);
    }

    return (
        <Box sx = {styles.container}>
            <Typography>
                Sort by
            </Typography>

            <Box>
                <FormControl
                    sx={styles.formControl}
                >
                    <Select
                        sx={{ margin: -1 }}
                        value={sortValue}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem
                            value={"Week"}>Week</MenuItem>
                        <MenuItem value={"Month"}>Month</MenuItem>
                        <MenuItem value={"Year"}>Year</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </Box>
    )
}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
    },
    formControl: {
        m: 1,
        px: "8px",
        minWidth: 90,
        textAlign: "center",
        background: "white",
        borderRadius: "12px",

        boxShadow: "0px 1px 1px rgb(0, 0, 0, 0.15)"
    },
}

export default SortByTime;