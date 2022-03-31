import React from 'react'
import color from '../../constant/color'
import { borderRadius, Box, height, width } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { EyeIc, GreenUpArrIc, RedDownArrIc, GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'
import styles from './sales.style'
import CardItemSellerStock from '../../components/CardItemSellerStock/CardItemSellerStock'
import SaleCommonCard from '../../components/SaleCommonCard/SaleCommonCard'
import CardNameSeller from '../../components/CardNameSeller/CardNameSeller'
let img = "https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg"
let catalog = [['laptoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaap', '2', '10000'], ['laptop', '2', '10000'], ['laptop', '2', '10000'], ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalaptop', '2', '10000'], ['laptop', '2', '10000']]
let customers = ['Naasdasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasam', 'Nam', 'Nam', 'Nam', 'Nam']
let product = ['mac', img, "121212"]
let products = [['maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac', img, "121212"], ['mac', img, "121212"], ['mac', img, "121212"], ['mac', img, "121212"]]
const Sales = () => {
    return (
        <Box sx={{ ...styles.flex, justifyContent: 'space-around', backgroundColor: color.background }}>
            <Box sx={{}}>
                <SaleCommonCard title="best"
                    content={
                        <CardItemSellerStock productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isViewed={false} content="1000000 đ" stonkImg={GreenUpStonkIc} percentage="55"></CardItemSellerStock>
                    }></SaleCommonCard>

                <SaleCommonCard title="best"
                    content={
                        <CardItemSellerStock productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isViewed={true} content="1000000 đ" contentImg={EyeIc} stonkImg={GreenUpStonkIc} percentage="55"></CardItemSellerStock>
                    }></SaleCommonCard>
                <SaleCommonCard title="best"
                    content={
                        // <CardNameSeller name='laptop' rank={1} grow={2} growImg={GreenUpArrIc} payment="1000000"></CardNameSeller>
                        catalog.map((cata, rank) =>
                            <CardNameSeller name={cata[0]} rank={rank + 1} grow={cata[1]} growImg={GreenUpArrIc} payment={cata[2]}></CardNameSeller>
                        )
                    }></SaleCommonCard>
            </Box>
            <Box sx={{}}>

                <SaleCommonCard title="best"
                    content={
                        products.map((product) =>
                            <CardNameSeller name={product[0]} productImg={product[1]} payment={product[2]} ></CardNameSeller>
                        )
                    }>
                </SaleCommonCard>
            </Box>
            <Box sx={{}}>
                <SaleCommonCard title="best"
                    content={
                        customers.map((customer,rank) =>
                            <CardNameSeller rank={rank+1} name={customer} isName={true} ></CardNameSeller>
                        )
                    }>
                </SaleCommonCard>
            </Box>


        </Box>




    )
}

export default Sales