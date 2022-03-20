import React from 'react'
import color from '../../constant/color'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Sales = () => {
    return (
        <Box
            style={{
                height: "100vh",
                background: color.background
            }}
        >
            <Typography
                style={{ fontSize: "32px", textAlign: "center" }}
            >
                Hello Sales
            </Typography>

        </Box>
    )
}

export default Sales