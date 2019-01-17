import React from 'react';
import {NavLink} from "react-router-dom";

const ThirdSection = (props) => {
    return (
        <>
            <ul className="nav justify-content-center main-nav">
                <li className="nav-item">
                    <NavLink activeClassName='active' to="/homepage" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='active' to="/matches" className="nav-link">Matches</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='active' to="/auction" className="nav-link">Auction</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='active' to='/tournament' className="nav-link">Tournament</NavLink>
                </li>
            </ul>
        </>
    );
};

export default ThirdSection;