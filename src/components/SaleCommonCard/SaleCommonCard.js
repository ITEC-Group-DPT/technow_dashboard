import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import styles from './SaleCommonCard.style'

const SaleCommonCard = ({ title, children }) => {
    return (
        <Card variant="outlined" sx={{
            ...styles.card, py: 1, filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15))",
        }}>
            <CardContent sx={{ px: 3, pt: 1 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: "700", fontSize: "24px", color: "#575757" }}>
                    {title}
                </Typography>
            </CardContent>
            {children}
        </Card>
    )
}
export default SaleCommonCard;