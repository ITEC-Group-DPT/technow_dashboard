import React, { useState } from 'react'
import { Box } from '@mui/system'

import { Typography, Select, FormControl, MenuItem, styled, InputBase } from '@mui/material'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        'aria-label': 'Without label',
    },
}));
const DropDownStatus = ({
    defaultValue = "All",
    onChangeValue,
}) => {

    const [status, setStatus] = useState(defaultValue);

    const handleChange = (event) => {
        let value = event.target.value;

        onChangeValue && onChangeValue(value);
        setStatus(value);
    }

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>Status:</Typography>
            <Box>
                <FormControl
                    sx={styles.formControl}
                >
                    <Select
                        sx={styles.select}
                        value={status}
                        onChange={handleChange}
                        input={<MyInput />}
                        className={"HIHI"}

                    >
                        <MenuItem value={"All"} className={"HEHEHEEHEOBOIIO"}>All</MenuItem>
                        <MenuItem value={"Received"} className={"HEHEHEEHEOBOIIO"}>Received</MenuItem>
                        <MenuItem value={"Processing"} className={"HEHEHEEHEOBOIIO"}>Processing</MenuItem>
                        <MenuItem value={"Shipping"} className={"HEHEHEEHEOBOIIO"}>Shipping</MenuItem>
                        <MenuItem value={"Completed"} className={"HEHEHEEHEOBOIIO"}>Completed</MenuItem>
                        <MenuItem value={"Cancelled"} className={"HEHEHEEHEOBOIIO"}>Cancelled</MenuItem>

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
    title: {
        color: '#848484',
    },
    item: {

    },
    formControl: {
        m: 1,
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

export default DropDownStatus;