import React, { useState } from 'react'
import { Box } from '@mui/system'

import { Typography, Select, FormControl, MenuItem, styled, InputBase } from '@mui/material'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}));
const SortByTime = ({
    defaultValue = "Month",
    onChangeValue,
}) => {

    const [sortValue, setSortValue] = useState(defaultValue);

    const handleChange = (event) => {
        let value = event.target.value;

        onChangeValue && onChangeValue(value);
        setSortValue(value);
    }

    return (
        <Box sx={styles.container}>
            <Typography>
                Sort by
            </Typography>

            <Box>
                <FormControl
                    sx={styles.formControl}
                >
                    <Select
                        sx={styles.select}
                        value={sortValue}
                        onChange={handleChange}
                        input={<MyInput />}
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
        ml: 1,
        mr: 0,
        background: "white",
        borderRadius: "12px",

        boxShadow: "0px 1px 1px rgb(0, 0, 0, 0.15)"
    },
    select: {
        py: "4px",
        paddingLeft: "20px",
    },
}

export default SortByTime;