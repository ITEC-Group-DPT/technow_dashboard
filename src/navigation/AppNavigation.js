import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
} from "react-router-dom";

import App from "../App.js"

//Pages
import Home from '../pages/Home'
import Sales from '../pages/Sales'
import Products from '../pages/Products'
import Customers from '../pages/Customers'
import Orders from '../pages/Orders'



const AppNavigagtion = () => {
    return (
        <Router>
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