import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Reg from "./pages/Reg";

const NonAuthorizedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/reg">
                <Reg/>
            </Route>
            <Redirect
                to={{
                    pathname: "/reg",
                }}
            />
        </Switch>
    );
};

export default NonAuthorizedRoutes;