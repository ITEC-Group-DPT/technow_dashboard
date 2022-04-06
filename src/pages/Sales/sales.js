
import React, { useState, useEffect } from 'react'
import color from '../../constant/color'
import { borderRadius, Box, height, width } from '@mui/system'
import { Typography, useMediaQuery } from '@mui/material'
import { EyeIc, GreenUpArrIc, RedDownArrIc, GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'

import styles from './sales.style'
import "./sales.css"
import CardItemSellerStock from '../../components/CardItemSellerStock/CardItemSellerStock'
import SaleCommonCard from '../../components/SaleCommonCard/SaleCommonCard'
import CardProductSeller from '../../components/CardProductSeller/CardProductSeller'
import CardNameSeller from '../../components/CardNameSeller/CardNameSeller'
import CustomLineChart from '../../components/LineChart/lineChart'
import { getSaleOverview } from '../../api/saleAPI'
import SortByTime from "../../components/SortByTime/sortByTime"

let img = "https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff.jpg"
let catalog = [['Laptop', '2', '54.000.000 đ'], ['Gaming chair', '-2', '54.400.000 đ'], ['Mouse', '-2', '54.400.000 đ'], ['SSD', '2', '54.400.000 đ'], ['Keyboard', '2', '54.400.000 đ']]
let dummycustomers = ['Kurozemi', 'Tezuko', 'Miaojee', 'Jason', 'Tory']
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
let dummydata = {
    "saleInTime": [
        {
            "count": 10
        }
    ],
    "itemOnSale": [
        {
            "count": 20
        }
    ],
    "topRevenue": [
        {
            "productID": 117,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F17.webp?alt=media&token=43ee3694-d277-4aa1-8b95-e07e693e2337",
            "name": "Laptop MSI Prestige 15 A10SC-222VN",
            "price": 33999000,
            "revenue": 33999000
        },
        {
            "productID": 154,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FDell%20UltraSharp%20U2721DE.jpg?alt=media&token=5c870f05-26de-42d1-99e5-80516cd22224",
            "name": "Màn hình Dell UltraSharp U2721DE 27'",
            "price": 10690000,
            "revenue": 32070000
        },
        {
            "productID": 158,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FSamsung%20LC49J890.jpg?alt=media&token=2cbc46d5-2884-47e4-8282-40f948768bf4",
            "name": "Màn hình SAMSUNG LC49J890 49'",
            "price": 31890000,
            "revenue": 31890000
        },
        {
            "productID": 243,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Speaker%2F03.webp?alt=media&token=66e79fa8-971b-45fa-86b4-6b323d81ed05",
            "name": "Loa Bluetooth JBL Party Box 100 (Black)",
            "price": 9500000,
            "revenue": 28500000
        },
        {
            "productID": 12,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu12.webp?alt=media&token=1da3b0b7-29cf-42e5-93fd-c0ae9a5aa82f",
            "name": "CPU Intel Core i7 9700F",
            "price": 8390000,
            "revenue": 25170000
        }
    ],
    "bestSeller": [
        {
            "productID": 2,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu2.webp?alt=media&token=c1f59c93-085e-479b-9472-3165d38acce4",
            "name": "CPU AMD Ryzen 3 2200G",
            "price": 2590000,
            "unit": "3",
            "up": "0.0000"
        }
    ],
    "mostViewed": [
        {
            "productID": 78,
            "productimg": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F081.webp?alt=media&token=a61ca020-fbd1-42f9-8fa5-d42168c2b8c5",
            "name": "Tai nghe Over-ear Razer Tiamat V2 ",
            "view": 5,
            "up": "150.0000"
        }
    ],
    "mostProfitableCate": [
        {
            "type": "CPU",
            "total": 59380000,
            "rank": 1,
            "up": 7
        },
        {
            "type": "Laptop",
            "total": 44289000,
            "rank": 2,
            "up": 0
        },
        {
            "type": "Monitor",
            "total": 42580000,
            "rank": 3,
            "up": 2
        },
        {
            "type": "Headphone",
            "total": 16879000,
            "rank": 4,
            "up": 4
        },
        {
            "type": "VGA",
            "total": 16290000,
            "rank": 5,
            "up": -4
        }
    ],
    "incomeByTime": [
        {
            "month": "Nov",
            "income": 299.22
        },
        {
            "month": "Dec",
            "income": 144.99
        },
        {
            "month": "Jan",
            "income": 8.76
        },
        {
            "month": "Feb",
            "income": 116.687
        },
        {
            "month": "Mar",
            "income": 489.649
        },
        {
            "month": "Apr",
            "income": 68.119
        }
    ]
}
const Sales = () => {
    const largeScreen = useMediaQuery('(min-width:1500px)');

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
    // useEffect(() => {
    //     getData()
    // }, [filterTime]);

    return (
        <Box sx={{ backgroundColor: color.background, ml: '84px', py: 8, px: largeScreen ? "4.5%" : "7%" }}>
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
                            productImg={bestSeller[0].productimg} isView={false} content={bestSeller[0].price}
                            percentage={bestSeller[0].up}
                        />
                    </SaleCommonCard>


                    <SaleCommonCard
                        title='Most viewed product'
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
                        title='Most profitable categories'
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
                        title="Top revenue by products"
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