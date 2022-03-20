import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
} from "react-router-dom";

import App from "../App.js"

//Pages
import Home from '../pages/Home/home'
import Sales from '../pages/Sales/sales'
import Products from '../pages/Products/products'
import Customers from '../pages/Customers/customer'
import Orders from '../pages/Orders/order'

//demo purpose
import UserInfo from "../displayUserInfo.js";



const AppNavigagtion = () => {
    return (
        <Router>
            <UserInfo/>
            <Switch>

                <Route
                    exact path={"/"} element={<Home />}
                />

                <Route
                    exact path={"/sales"} element={<Sales />}
                />

                <Route
                    exact path={"/products"} element={<Products />}
                />

                <Route
                    exact path={"/customers"} element={<Customers />}
                />

                <Route
                    exact path={"/orders"} element={<Orders />}
                />

            </Switch>
        </Router>
    )
}
export default AppNavigagtion