import React, { useState } from 'react'
import { Select, FormControl, MenuItem, styled, InputBase, Box } from '@mui/material'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        paddingTop: 0,
        'aria-label': 'Without label',
    },
}))

const sortList = ['Top Purchased', 'Least Purchased']

const SortPurchased = ({ defaultValue = "Top Purchased", onChangeValue }) => {
    const [sort, setSort] = useState(defaultValue)

    const handleChange = (event) => {
        let value = event.target.value
        onChangeValue && onChangeValue(value)
        setSort(value)
    }

    return (
        <Box>
            <FormControl sx={styles.formControl}>
                <Select
                    sx={styles.select}
                    value={sort}
                    onChange={handleChange}
                    input={<MyInput />}
                    MenuProps={{ disableScrollLock: true }}
                >
                    {sortList.map((sort) => (
                        <MenuItem value={sort} key={sort}>{sort}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

const styles = {
    title: {
        color: '#848484',
    },
    formControl: {
        boxSizing: 'border-box',
        height: "100%",
        width: "150px",
        py: 0
    },
    select: {
        textAlign: 'center',
        fontWeight: 600
    },
}

export default SortPurchased