import React from 'react'

import styles from './statHome.style'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

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

    const formattedPrice = (price) => {
        return price / 1000000 + " triệu";
    }

    const numberData =
        title != "Sales"
            ? stat.data
            : formattedPrice(stat.data)

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
                percent={Math.abs(stat.percent)}

                width={135}
                height={135}

                innerRadius={44}
                left={50}
                bottom={"40%"}
                fontSize={22}
            />

            <Box sx={styles.arrowBox}>
                {
                    stat.percent > 0
                    ? <ArrowUp id={`stat${title}`} />
                    : <ArrowDown id={`stat${title}`} />
                }
            </Box>
        </Box>
    )
}

export default StatHome