import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from "./PageNotFound";
import Homepage from "../pages/Homepage";
import Matches from "../pages/Matches";
import Auction from "../pages/Auction";
import Tournament from "../pages/Tournament";

const Body = (props) => {
    return (
        <>

        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/matches" componecnt={Matches}/>
            <Route path="/auction" component={Auction}/>
            <Route path="/tournament" component={Tournament}/>

            {/*  Display this component if routes does not exist */}
            <Route component={PageNotFound}/>
        </Switch>
        </>
    );
};

export default Body;