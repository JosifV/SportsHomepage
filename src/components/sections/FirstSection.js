import React, {Component} from 'react';
import SelectCityModal from "../SelectCityModal";
import SelectSportModal from "../SelectSportModal";
import SecondSection from "./SecondSection";
import SecondSectionResponsive from "./SecondSectionResponsive";

class FirstSection extends Component {

    state = {
        isOpen: false
    };

    collapseNavBar = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light p-1">
                <div className="d-flex justify-content-start align-items-center">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/images/logofts.png" alt="" className={'fts-logo '}/>
                    </a>

                    <ul className="flex-row d-lg-none d-lg-none navbar-nav select-modal-buttons ml-4">
                        <li className="nav-item dropdown mr-2">
                            <button title={'Select city'} type="button"
                                    className="btn btn-sm office-building btn-orange select-modal d-flex align-items-center"
                                    data-toggle="modal" data-target="#select-city">
                                <i></i>
                                <span className={'d-none d-md-block'}>Select city</span>
                            </button>
                        </li>

                        <li className="nav-item dropdown">
                            <button title={'Select sport'} type="button"
                                    className="btn btn-sm shoot-ball btn-orange select-modal d-flex align-items-center"
                                    data-toggle="modal" data-target="#select-sport">
                                <i></i>
                                <span className={'d-none d-md-block'}>Select Sport</span>
                            </button>
                        </li>
                    </ul>

                </div>

                <div className="d-flex d-lg-none justify-content-end">
                    <button className="navbar-toggler font-26 border-0" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"/>
                    </button>
                </div>

                <div className={"collapse navbar-collapse"} onClick={this.collapseNavBar} id="navbarSupportedContent">

                    <div className={'d-lg-none'}>
                        <SecondSectionResponsive />
                    </div>

                    <ul className="d-none d-lg-flex d-lg-flex justify-content-between align-items-center navbar-nav mr-auto select-modal-buttons">
                        <li className="nav-item dropdown mr-2">
                            <button type="button"
                                    className="btn office-building btn-orange select-modal d-flex align-items-center"
                                    data-toggle="modal" data-target="#select-city">
                                <i></i>
                                <span>Select city</span>
                            </button>
                        </li>

                        <li className="nav-item dropdown">
                            <button type="button"
                                    className="btn shoot-ball btn-orange select-modal d-flex align-items-center"
                                    data-toggle="modal" data-target="#select-sport">
                                <i></i>
                                <span>Select sport</span>
                            </button>
                        </li>
                    </ul>

                    <div className="d-none d-md-block d-lg-block my-2 my-lg-0">
                        <ul className='social-icons d-none d-lg-flex justify-content-end'>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-linkedin"/>
                                </a>
                            </li>
                        </ul>


                        <div className="d-none d-lg-flex">
                            <span className={'d-flex justify-content-end mr-3'}>
                            <img src="/assets/images/icons/phone.svg" alt="" className={'phone-icon'}/>
                            895233123
                        </span>

                            <span className={''}>
                            <img src="/assets/images/icons/mail.svg" alt="" className={'email-icon'}/>
                            ftpsupport@gmail.com
                        </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* modals */}

            <SelectCityModal/>

            <SelectSportModal/>

            </>
        );
    }
};

export default FirstSection;