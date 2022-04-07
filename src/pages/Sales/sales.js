
import React, { useState, useEffect } from 'react'
import color from '../../constant/color'
import { borderRadius, Box, height, width } from '@mui/system'
import { Typography, useMediaQuery } from '@mui/material'

import { dummycustomers, dummydata } from './dummyData'
import styles from './sales.style'
import "./sales.css"
import CardItemSellerStock from '../../components/CardItemSellerStock/CardItemSellerStock'
import SaleCommonCard from '../../components/SaleCommonCard/SaleCommonCard'
import CardProductSeller from '../../components/CardProductSeller/CardProductSeller'
import CardNameSeller from '../../components/CardNameSeller/CardNameSeller'
import CustomLineChart from '../../components/LineChart/lineChart'
import { getSaleOverview } from '../../api/saleAPI'
import SortByTime from "../../components/SortByTime/sortByTime"



const Sales = () => {
    const largeScreen = useMediaQuery('(min-width:1550px)');

    const [filterTime, setFilterTime] = useState("Month");
    const [customers, setCustomers] = useState(dummycustomers);
    const [category, setCategory] = useState(dummydata.mostProfitableCate)
    const [topRevenue, setTopRevenue] = useState(dummydata.topRevenue)
    const [dataLineChart, setDataLineChart] = useState(dummydata.incomeByTime)
    const [mostViewed, setMostViewed] = useState(dummydata.mostViewed)
    const [bestSeller, setBestSeller] = useState(dummydata.bestSeller)
    const [itemOnSale, setItemOnSale] = useState(dummydata.itemOnSale[0].count)
    const [saleInTime, setSaleInTime] = useState(dummydata.saleInTime[0].count)



    const getData = async () => {
        const response = await getSaleOverview(filterTime);
        if (response.data.success) {
            const data = response.data.data;
            // setCustomers()
            setCategory(data.mostProfitableCate)
            setTopRevenue(data.topRevenue)
            setDataLineChart(data.incomeByTime)
            setMostViewed(data.mostViewed)
            setBestSeller(data.bestSeller)
            setItemOnSale(data.itemOnSale[0].count)
            setSaleInTime(data.saleInTime[0].count)
            console.log(response.data);
        }
    }
    useEffect(() => {
        getData()
    }, [filterTime]);

    return (
        <Box sx={{ backgroundColor: color.background, ml: '84px', py: 8, px: largeScreen ? "7%" : "4.5%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={styles.pageTitle}>Sales Overview</Typography>

                <SortByTime
                    onChangeValue={setFilterTime}
                />
            </Box>
            <Box sx={{ ...styles.flex, justifyContent: 'space-between' }}>
                <Box sx={{ ...styles.box, ml: 0 }}>
                    <SaleCommonCard
                        title='Best Seller'
                        sx={{ pt: "18px", pb: "16px" }}
                    >
                        <CardItemSellerStock
                            productImg={bestSeller[0].productimg} isView={false} content={bestSeller[0].price}
                            percentage={bestSeller[0].up}
                        />
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Most Viewed Product'
                        sx={{ pt: "18px", pb: "16px" }}
                    >
                        <CardItemSellerStock
                            productImg={mostViewed[0].productimg}
                            isView={true}
                            content={mostViewed[0].view}
                            percentage={mostViewed[0].up}
                        />
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Most Profitable Categories'
                        sx={{ pt: "18px", pb: "26px" }}

                    >
                        <Box sx={{ mt: 1, }}>
                            {
                                category.map((cata) =>
                                    <CardNameSeller name={cata.type} rank={cata.rank} grow={cata.up} payment={cata.total}></CardNameSeller>
                                )
                            }
                        </Box>
                    </SaleCommonCard>

                </Box>


                <Box sx={{ ...styles.box }}>

                    <SaleCommonCard
                        title="Top Revenues"
                        sx={{ pt: "18px", pb: "26px" }}
                    >
                        <Box>
                            {
                                topRevenue.map((product) =>
                                    <CardProductSeller name={product.name} productImg={product.productimg} payment={product.revenue} ></CardProductSeller>
                                )
                            }
                        </Box>
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Total Sales'
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
                <Box sx={{ ...styles.box, mr: 0 }}>
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
                                    {itemOnSale}
                                </Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: color.grayText }} gutterBottom>
                                    Items On Sale
                                </Typography>

                            </Box>
                            <Box sx={{ my: 6 }}>
                                <Typography sx={{ color: color.red, fontWeight: 700, m: 0, fontSize: '52px' }} variant="h3" gutterBottom>
                                    {saleInTime}
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