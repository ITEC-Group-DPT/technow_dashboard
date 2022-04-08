import React from 'react'
import { Box, Typography } from '@mui/material'
import { DropDownIc } from '../../constant/icon'

const SortPurchased = ({ value, onChangeValue }) => {

    const handleChange = () => {

        const result = value == "Top Purchased" ? "Least Purchased" : "Top Purchased";
        onChangeValue && onChangeValue(result)
    }

    return (
        <Box
            sx={styles.box}
            onClick={handleChange}
        >
            <Typography sx={styles.title}>
                Purchased Amount
            </Typography>

            <img src={DropDownIc} style={{
                width: 15,
                height: 15,
                transform: value == "Least Purchased" && "scaleY(-1)"
            }} />
        </Box>
    )
}

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "pointer"
    },
    title: {
        color: '#848484',
    },
    formControl: {
        boxSizing: 'border-box',
        height: "100%",
        width: "160px",
        py: 0,
    },
    title: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '17px',
    },
}

export default SortPurchased