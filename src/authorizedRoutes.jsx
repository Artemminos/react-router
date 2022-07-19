import React from 'react';
import {Route, Switch,} from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Market from "./pages/Market";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/market">
                <Market/>
            </Route>
            <Route path="*">
                not found
            </Route>
        </Switch>
    );
};

export default Routes;