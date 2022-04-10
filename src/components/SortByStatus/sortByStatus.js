import React, { useState } from 'react'
import { Typography, Select, FormControl, MenuItem, styled, InputBase, Box } from '@mui/material'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}))

const statusList = ['All', 'Received', 'Processing', 'Shipping', 'Completed', 'Cancelled']

const SortByStatus = ({ defaultValue = "All", onChangeValue }) => {
    const [status, setStatus] = useState(defaultValue)

    const handleChange = (event) => {
        let value = event.target.value
        onChangeValue && onChangeValue(value)
        setStatus(value)
    }

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>Status:</Typography>
            <Box sx={{height: "100%"}}>
                <FormControl sx={styles.formControl}>
                    <Select
                        sx={styles.select}
                        value={status}
                        onChange={handleChange}
                        input={<MyInput />}
                        // MenuProps={{ disableScrollLock: true }}
                    >
                        {statusList.map((status) => (
                            <MenuItem value={status} key={status}>{status}</MenuItem>
                        ))}
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
        height: "100%",
    },
    title: {
        color: '#848484',
    },
    formControl: {
        ml: 1,
        border: "1px solid #D0D0D0",
        borderRadius: "5px",
        boxSizing: 'border-box',
        height: "100%",
        width: "132px",
    },
    select: {
        paddingLeft: "10px",
        color: '#848484',
        textAlign: 'center',
    },
}

export default SortByStatus