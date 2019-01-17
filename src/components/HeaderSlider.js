import React, { Component } from 'react';
import Slider from "react-slick";
import ResponsiveSlider from "./ResponsiveSlider";

class HeaderSlider extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <>
                <div className={'container text-white pt-3 pb-xs-2 pb-sm-3 pb-md-5'}>
                    <Slider {...settings} className={'main-slider d-md-block d-lg-block d-none'}>

                        <div className="row d-flex align-items-center">

                            <div className="col-6">
                                <img src="/assets/images/header_players.svg" className='header-players' alt="" />
                            </div>

                            <div className="col-6">
                                <h1>Feel the sport</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.
                            </p>
                                <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                    Book N Play
                            </button>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center">

                            <div className="col-6">
                                <img src="/assets/images/header_players.svg" className='header-players' alt="" />
                            </div>

                            <div className="col-6">
                                <h1>Image 2</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.
                            </p>
                                <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                    Book N Play
                            </button>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center mb-5">

                            <div className="col-6">
                                <img src="/assets/images/header_players.svg" className='header-players' alt="" />
                            </div>

                            <div className="col-6">
                                <h1>Image 3</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.
                            </p>
                                <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                    Book N Play
                            </button>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center">

                            <div className="col-6">
                                <img src="/assets/images/header_players.svg" className='header-players' alt="" />
                            </div>

                            <div className="col-6">
                                <h1>Image 4</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout.
                            </p>
                                <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                    Book N Play
                            </button>
                            </div>
                        </div>
                        
                    </Slider>

                    <div className="d-md-none d-lg-none">
                        <ResponsiveSlider />
                    </div>

                </div>
                
            </>
        );
    }
}

export default HeaderSlider;