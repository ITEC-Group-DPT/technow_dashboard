import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

//Pages
import Authentication from '../pages/Authentication/authentication'
import Home from '../pages/Home/home'
import Sales from '../pages/Sales/sales'
import Products from '../pages/Products/products'
import Customers from '../pages/Customers/customer'
import Orders from '../pages/Orders/order'
import NotFound from "../components/NotFound/NotFound";

//navigation
import LeftNavigation from "../components/LeftNavigation/leftNavigation"

//API && action
import useStore from "../appStore";

const AppNavigagtion = () => {

    const isLogin = useStore(state => state.userInfo.userID) != 0;

    if (isLogin == false) {
        return (
            <Router>
                <Switch>
=                    <Route
                        exact path={"/authentication"} element={<Authentication />}
                    />
                    <Route path="*" element={<Navigate replace to="/authentication" />} />
                </Switch>
            </Router>
        )
    }

    return (
        <Router>
            <LeftNavigation />
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

                <Route
                    path={"*"} element={<NotFound />}
                />

            </Switch>
        </Router>
    )
}
export default AppNavigagtion