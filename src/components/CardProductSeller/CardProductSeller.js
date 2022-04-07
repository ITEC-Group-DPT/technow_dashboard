import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardProductSeller.style'

const CardProductSeller = ({ productImg = false, name, payment }) => {
    payment = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(payment)
    return (
        <Box sx={{ ...styles.flex, flex: 1, px: 3, py: 1 }}>
            <Box sx={{
                maxWidth: 70,
                height: 70,
            }}>
                <img style={{height:'100%', width:"100%", objectFit:'cover' }} src={productImg} alt="" />
            </Box>

            <Box sx={{
                flex: 5,
            }}>
                <Typography sx={{
                    ...styles.pNameSlider,
                    maxWidth: "220px",
                }}>
                    {name}
                </Typography>
            </Box>

            <Box sx={{
                flex: 4,
               
            }}>
                <Typography sx={{
                    ...styles.money,

                }}>
                    {payment}
                </Typography>
            </Box>

        </Box>
    )
}
export default CardProductSeller;