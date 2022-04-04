import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
} from "react-router-dom";

//Pages
import Home from '../pages/Home/home'
import Sales from '../pages/Sales/sales'
import Products from '../pages/Products/products'
import Customers from '../pages/Customers/customer'
import Orders from '../pages/Orders/order'

//navigation
import LeftNavigation from "../components/LeftNavigation/leftNavigation"

//demo purpose
import ChartDemo from "../demo/chart";
import OtherDemo from "../demo/others"


//API && action
import useStore from "../appStore";
import { checkToken } from "../api/testAPI";


const AppNavigagtion = () => {

    const { loginAction } = useStore();

    useEffect(() => {
        console.log('run use effect');
        const email = "noaccount";
        const password = "nevergonnagiveyouup";

        loginAction(email, password);
    }, []);
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

                {/* demo */}
                <Route
                    exact path={"/chartdemo"} element={<ChartDemo />}
                />
                <Route
                    exact path={"/otherdemo"} element={<OtherDemo />}
                />

            </Switch>
        </Router>
    )
}
export default AppNavigagtion