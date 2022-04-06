import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'

import styles from './CardItemSellerStock.style'


const CardItemSellerStock = ({ productImg, isView = false, content, contentImg, stonkImg, percentage }) => {
    return (
        <Box sx={{ ...styles.flex }}>
            <CardMedia
                component="img"
                sx={{ width: '130px' }}
                image={productImg}
            >
            </CardMedia>
            <CardContent sx={{ pl: 7.5, mx: 1}}>
                <Box sx={{ ...styles.flex, pb: "18px", }}>
                    {isView && <img src={contentImg} style={{ marginRight: "20px" }} alt="" />}
                    <Typography sx={{ textAlign: "center", fontWeight: 600, fontSize: "20px", color: "#2D2D2D" }}>
                        {content}
                    </Typography>
                </Box>


                <Box sx={{ ...styles.flex, alignItems: 'center' }}>
                    <img src={stonkImg} style={{ marginRight: "20px" }} alt="" />
                    <Typography sx={{ fontWeight: 600, color: stonkImg == GreenUpStonkIc ? color.green : color.red, fontSize: "16px" }}>
                        {percentage}
                    </Typography>
                </Box>
            </CardContent>
        </Box>
    )
}
export default CardItemSellerStock;