import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardNameSeller.style'
let CatalogPercentage = [1, 4, 1, 3]
let NamePercentage=[1,9]
const CardNameSeller = ({ rank, name, grow, growImg, growStatus = 'red', payment, isName = false }) => {
    let rankcolor = color["R" + rank]
    let flexpercentage = isName ?NamePercentage :CatalogPercentage
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
                    mx:1,
                    flex: flexpercentage[0]
                }}>
                    <p style={{ textAlign: 'center', color: color.white, fontWeight: "600" }}>{rank}</p>
                </Box>



                <Typography variant="p" component="div" sx={{ ...styles.pNameSlider, flex: flexpercentage[1], overflowWrap: 'anywhere', textAlign: "start", fontWeight: "600" }}>
                    {name}
                </Typography>

                {isName
                    ? <></>
                    :
                    [<Box sx={{ ...styles.flex, flex: flexpercentage[2], justifyContent:'center' }}>
                        <img src={growImg} alt="" />
                        {growStatus == "red" ?
                            <p style={{ color: color.red }}>{grow}</p>
                            :
                            <p style={{ color: color.green }}>{grow}</p>
                        }

                    </Box>,
                    <Box sx={{ flex: flexpercentage[3], textAlign: 'end' }}>
                        <Typography variant="p" sx={{ width: 'fit-content', backgroundColor: color.lightBlue, borderRadius: 5, px:'4px', color: color.blue, fontSize:"0.9rem" }}>
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