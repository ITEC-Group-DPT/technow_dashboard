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
                        sx={{ margin: -0.8 }}
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
        width: 95,
        textAlign: "center",
        background: "white",
        borderRadius: "15px",

    },
}

export default SortByTime;