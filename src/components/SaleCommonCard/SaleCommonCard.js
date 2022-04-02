import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import styles from './SaleCommonCard.style'

const SaleCommonCard = ({ title = '', children, footer = false }) => {
    return (
        <Card variant="outlined" sx={{
            ...styles.card, py: 1, filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15))",
        }}>
            <CardContent sx={{ px: 4, pt: 1 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: "700", fontSize: "20px", color: "#575757" }}>
                    {title}
                </Typography>
            </CardContent>
            {children}
            {footer &&
                <CardActions sx={{ textAlign: 'center', py:0}}>
                    <Button sx={{ color: color.grayText, m: 'auto', py: 0, px:4, fontSize: '14px', textTransform: 'unset' }}>
                        See all
                    </Button>
                </CardActions>
            }
        </Card>
    )
}
export default SaleCommonCard;