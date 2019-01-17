import React, { Component } from 'react';
import Tournaments from "../components/sections/Tournaments";
import BestOffers from "../components/sections/BestOffers";
import WinMatches from "../components/sections/WinMatches";
import PartnerWithUs from "../components/sections/PartnerWithUs";
import Footer from "../components/Footer";
import HowItWorks from "../components/sections/HowItWorks";
import {Redirect} from "react-router-dom";

class Homepage extends Component {

    isHomePage = () => {
        if (this.props.location.pathname === "/") {
            return <Redirect to={'/homepage'} />

        }
    };

    render() {
        return (
            <>
            {this.isHomePage()}

            <div className='winning-bg'>
                <h3 className={'text-center'}>"Winning isn't everything, it's the only thing."</h3>
            </div>

            <HowItWorks/>

            <Tournaments/>

            <BestOffers/>

            <WinMatches/>

            <PartnerWithUs/>

            <Footer/>

            </>
        )
    }
}

export default Homepage;