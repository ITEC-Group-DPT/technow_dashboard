import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import {GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'

import styles from './CardItemSellerStock.style'


const CardItemSellerStock = ({ productImg, isView = false, content, contentImg, stonkImg, percentage }) => {
    return (
        <Box>
            <Box sx={{ ...styles.flex }}>
                <CardMedia
                    component="img"
                    sx={{ width: '170px', mx: 2 }}
                    image={productImg}
                >
                </CardMedia>
                <CardContent sx={{ px: 0, mx: 1 }}>
                    <Box sx={{ ...styles.flex, }}>
                        {isView &&<img src={contentImg} style={{ height: "1.5rem", width: "2rem", marginRight: "20px" }} alt="" />}
                        <Typography variant="h5" sx={{ py: 1, textAlign: "center", fontWeight:600,  }} component="div">
                            {content}
                        </Typography>
                    </Box>
                

                    <Box sx={{ ...styles.flex, alignItems: 'center' }}>
                        <img src={stonkImg} style={{ height: "1.5rem", width: "2rem", marginRight: "20px" }} alt="" />
                        <Typography variant="h5" component="div" sx={{fontWeight:600, color: stonkImg == GreenUpStonkIc ? color.green : color.red}}>
                            {percentage}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Box>
    )
}
export default CardItemSellerStock;