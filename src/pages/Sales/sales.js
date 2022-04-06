
import React, { useState } from 'react'
import color from '../../constant/color'
import { borderRadius, Box, height, width } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { EyeIc, GreenUpArrIc, RedDownArrIc, GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'
import styles from './sales.style'
import "./sales.css"
import CardItemSellerStock from '../../components/CardItemSellerStock/CardItemSellerStock'
import SaleCommonCard from '../../components/SaleCommonCard/SaleCommonCard'
import CardProductSeller from '../../components/CardProductSeller/CardProductSeller'
import CardNameSeller from '../../components/CardNameSeller/CardNameSeller'
import CustomLineChart from '../../components/LineChart/lineChart'
import SortByTime from "../../components/SortByTime/sortByTime"

let img = "https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff.jpg"
let catalog = [['Laptop', '2', '54.000.000 đ'], ['Gaming chair', '-2', '54.400.000 đ'], ['Mouse', '-2', '54.400.000 đ'], ['SSD', '2', '54.400.000 đ'], ['Keyboard', '2', '54.400.000 đ']]
let customers = ['Kurozemi', 'Tezuko', 'Miaojee', 'Jason', 'Tory']
let product = ['mac', img, "121212"]
let products = [['CPU Intel Core i7', img, "54.400.000 đ"], ['Màn hình Lenovo ThinkVision S22e dasd', img, "54.400.000 đ"], ['Tai nghe không dây Over-ear SteelSeries', img, "5.400.000.000 đ"], ['mac', img, "54.400.000 đ"], ['mac', img, "54.400.000 đ"]]

const dataLineChart = [
    {
        month: 'Jan',
        income: 25,
    },
    {
        month: 'Feb',
        income: 28,
    },
    {
        month: 'Mar',
        income: 23,
    },
    {
        month: 'Apr',
        income: 37,
    },
    {
        month: 'May',
        income: 40,
    },
    {
        month: 'June',
        income: 40,
    },
];


const Sales = () => {
    const [filterTime, setFilterTime] = useState("Month");

    return (
        <Box sx={{ backgroundColor: color.background, ml: '84px', py: 8, px:'3rem' }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={styles.pageTitle}>Sales Overview</Typography>

                <SortByTime
                    onChangeValue={setFilterTime}
                />
            </Box>
            <Box sx={{ ...styles.flex, justifyContent: 'space-between' }}>
                <Box sx={{ ...styles.box, ml: 0 }}>
                    <SaleCommonCard
                        title='Best seller'
                        sx={{ pt: "18px", pb: "16px" }}
                    >
                        <CardItemSellerStock
                            productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isView={false} content="73.800.000 đ"
                            stonkImg={GreenUpStonkIc} percentage="51%"
                        />
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Most viewed product'
                        sx={{ pt: "18px", pb: "16px" }}
                    >
                        <CardItemSellerStock
                            productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isView={true}
                            content="1000"
                            contentImg={EyeIc}
                            stonkImg={RedDownStonkIc}
                            percentage="55%"
                        />
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Most profitable categories'
                        sx={{ pt: "18px", pb: "26px" }}

                    >
                        <Box sx={{ mt: 1, }}>
                            {
                                catalog.map((cata, rank) =>
                                    <CardNameSeller name={cata[0]} rank={rank + 1} grow={cata[1]} payment={cata[2]}></CardNameSeller>
                                )
                            }
                        </Box>
                    </SaleCommonCard>

                </Box>


                <Box sx={{ ...styles.box }}>

                    <SaleCommonCard
                        title="Top revenue by products"
                        sx={{ pt: "18px", pb: "26px" }}
                    >
                        <Box>
                            {
                                products.map((product) =>
                                    <CardProductSeller name={product[0]} productImg={product[1]} payment={product[2]} ></CardProductSeller>
                                )
                            }
                        </Box>
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Total sales'
                        sx={{ pt: "18px", pb: "26px" }}

                    >

                        <p style={{ marginLeft: "30px", color: color.grayText }}>(million VND)</p>
                        <CustomLineChart

                            data={dataLineChart}
                            xAxisName="month"
                            yAxisName="income"
                            yAxisCount={6}
                            width={380}
                            height={200}
                            lineColor={color.red}
                        />
                    </SaleCommonCard>
                </Box>
                <Box sx={{...styles.box, mr: 0}}>
                    <SaleCommonCard title="Top Customer" footer={true} sx={{ pb: 0 }}>
                        <Box sx={{ width: "350px", mt: "12px" }}>
                            {
                                customers.map((customer, rank) =>
                                    <CardNameSeller rank={rank + 1} name={customer} isName={true} />
                                )
                            }
                        </Box>
                    </SaleCommonCard>

                    <SaleCommonCard
                        title="General Statistic"
                        sx={{ pt: "18px", pb: "26px" }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{ my: 6 }}>
                                <Typography sx={{ color: color.red, fontWeight: 700, m: 0, fontSize: '52px' }} variant="h3" gutterBottom>
                                    3,456
                                </Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: color.grayText }} gutterBottom>
                                    Items On Sale
                                </Typography>

                            </Box>
                            <Box sx={{ my: 6 }}>
                                <Typography sx={{ color: color.red, fontWeight: 700, m: 0, fontSize: '52px' }} variant="h3" gutterBottom>
                                    432
                                </Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: color.grayText }} gutterBottom>
                                    Sales this {filterTime}
                                </Typography>
                            </Box>

                        </Box>

                    </SaleCommonCard>
                </Box>
            </Box>

        </Box>




    )
}

export default Sales