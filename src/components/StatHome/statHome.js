import React from 'react'

import styles from './statHome.style'
import { Box } from '@mui/system'
import { Typography, useMediaQuery } from '@mui/material'

import PieChart from "../PieChart/pieChart"
import { ReactComponent as ArrowUp } from '../../assets/ic_degree_up_arrow.svg';
import { ReactComponent as ArrowDown } from '../../assets/ic_degree_down_arrow.svg';

import "./statHome.css"


const StatHome = ({
    title,
    subTitle,
    style,
    stat,
}) => {

    // const shortLength = useMediaQuery("(max-length:1300px)")
    const formattedPrice = (price) => {

        return (price / 1000000).toFixed(1) + " triệu";
    }


    const numberData =
        title != "Sales"
            ? stat.current
            : formattedPrice(stat.current)

    return (
        <Box sx={[styles.statBox, style]}>
            <Box sx={styles.leftStat}>

                <Typography sx={styles.title}>
                    {title}
                </Typography>

                <Typography sx={styles.subTitle}>
                    {subTitle}
                </Typography>

                <Typography sx={styles.numberData}>
                    {numberData}
                </Typography>
            </Box>

            <PieChart
                percent={Math.floor(Math.abs(stat.percent) * 100)}

                width={135}
                height={135}

                innerRadius={44}
                left={Math.abs(stat.percent) == 1 ? 40 : 45}
                bottom={52}
                fontSize={22}
            />

            <Box sx={styles.arrowBox}>
                {
                    (stat.percent > 0 && numberData > 0)
                        ? <ArrowUp id={`stat${title}`} />
                        : <ArrowDown id={`stat${title}`} />
                }
            </Box>
        </Box>
    )
}

export default StatHome