import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardProductSeller.style'

const CardProductSeller = ({ productImg = false, name, payment }) => {

    return (
        <Box sx={{ ...styles.flex, flex: 1, px: 3, py: 1 }}>
            <Box sx={{
                minWidth: 70,
                height: 70,
                flex: 1,
            }}>
                <img style={{ height: "100%" }} src="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" alt="" />
            </Box>

            <Box sx={{
                flex: 4,
            }}>
                <Typography sx={{
                    ...styles.pNameSlider,
                    maxWidth: "220px",
                }}>
                    {name}
                </Typography>
            </Box>

            <Box sx={{
                flex: 1.5,
                marginLeft: "24px",
                backgroundColor: "#F0F7FF",
                borderRadius: "5px", 
                px: '8px', 
                py: "6px",
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