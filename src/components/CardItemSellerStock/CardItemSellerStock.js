import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import styles from './CardItemSellerStock.style'


const CardItemSellerStock = ({ productImg, isViewed, content, contentImg, stonkImg, percentage }) => {
    return (
        <Box>
            <Box sx={{ ...styles.flex}}>
                <CardMedia
                    component="img"
                    sx={{ width: '120px', mx: 2 }}
                    image={productImg}
                >
                </CardMedia>
                <CardContent sx={{ ml:3 }}>
                    {isViewed
                        ?
                        <Box sx={{ ...styles.flex, }}>
                            <img src={contentImg} style={{ height: "1.5rem", width: "2rem", marginRight: "20px" }} alt="" />
                            <Typography variant="h5" component="div">
                                {content}
                            </Typography>
                        </Box>
                        :
                        <Typography variant="h5" sx={{ py: 1, textAlign: "center" }} component="div">
                            {content}
                        </Typography>}

                    <Box sx={{ ...styles.flex, alignItems: 'center' }}>
                        <img src={stonkImg} style={{ height: "1.5rem", width: "2rem", marginRight: "20px" }} alt="" />
                        <Typography variant="h5" component="div">
                            {percentage}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Box>


    )
}
export default CardItemSellerStock;