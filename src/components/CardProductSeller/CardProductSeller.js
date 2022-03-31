import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardProductSeller.style'
let flexpercentage = [1, 5, 4]
const CardProductSeller = ({ productImg = false, name, payment }) => {

    return (
        <Box sx={{
            px: 3, py: 1
        }}>
            <Box sx={{ ...styles.flex, flex: 1 }}>
                <Box sx={{
                    minWidth: 70,
                    height: 70,
                    flex: flexpercentage[0]
                }}>
                    <img style={{ height: "100%" }} src="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" alt="" />
                </Box>


                <Typography variant="p" component="div" sx={{ ...styles.pNameSlider, flex: flexpercentage[1], overflowWrap: 'anywhere', textAlign: "start", fontWeight: "600" }}>
                    {name}
                </Typography>

                <Box sx={{ flex: flexpercentage[2], textAlign: 'end' }}>
                    <Typography variant="p" sx={{ width: 'fit-content', maxWidth: "45%", backgroundColor: color.lightBlue, borderRadius: 5, px: 1, color: color.blue }}>
                        {payment}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}
export default CardProductSeller;