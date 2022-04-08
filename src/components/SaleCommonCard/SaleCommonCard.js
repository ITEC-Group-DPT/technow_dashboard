import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import styles from './SaleCommonCard.style'

const SaleCommonCard = ({ title = '', children, footer = false, sx }) => {
    return (
        <Card sx={{
            ...styles.card, py: 1, boxShadow: '0px 1px #d5d6d8',
            ...sx,
        }}>
            <CardContent sx={{ px: 4, pt: 1, py: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: "700", fontSize: "18px", color: "#575757", py: 0 }}>
                    {title}
                </Typography>
            </CardContent>
            {children}
            {footer &&
                <CardActions sx={{
                    mt: 0.5,
                    width: "100%",
                    p: 0,
                }}>
                    <Button sx={{
                        color: color.grayText,
                        px: 0,
                        pb: 1,
                        fontSize: '14px',
                        textAlign: "center",
                        textTransform: 'unset',
                        width: "100%"
                    }}>
                        See all
                    </Button>
                </CardActions>
            }
        </Card>
    )
}
export default SaleCommonCard;