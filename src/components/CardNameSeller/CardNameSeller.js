import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { GreenUpArrIc, RedDownArrIc } from '../../constant/icon'

import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardNameSeller.style'
let CatalogPercentage = [1, 4, 1, 4]
let NamePercentage = [1, 9]
const CardNameSeller = ({ rank, name, grow, payment, isName = false }) => {
    let rankcolor = color["R" + rank]
    let flexpercentage = isName ? NamePercentage : CatalogPercentage
    let growImg = grow > 0 ? GreenUpArrIc : RedDownArrIc
    if (grow < 0) grow = grow * -1


    return (
        <Box sx={{
            px: 3, py: 1
        }}>
            <Box sx={{ ...styles.flex }}>
                <Box sx={{
                    minWidth: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: rankcolor,
                    mx: 1,
                    flex: flexpercentage[0]
                }}>
                    <p style={{ textAlign: 'center', color: color.white, fontWeight: "600", marginTop: '13px' }}>{rank}</p>

                </Box>



                <Typography sx={{ ...styles.pNameSlider, flex: flexpercentage[1], }}>
                    {name}
                </Typography>

                {isName
                    ? <></>
                    :
                    [<Box sx={{ ...styles.flex, flex: flexpercentage[2], justifyContent: 'center', ml: "2px" }}>
                        {rank < 4
                            &&
                            [<img src={growImg} alt="" />,
                            <span style={{ color: growImg == GreenUpArrIc ? color.green : color.red, fontWeight: 500 }}>{grow}</span>]
                        }


                    </Box>,
                    <Box sx={{ flex: flexpercentage[3] }}>
                        <Typography sx={{ ...styles.money, }}>
                            {payment}
                        </Typography>
                    </Box>


                    ]
                }
            </Box>
        </Box>
    )
}
export default CardNameSeller;