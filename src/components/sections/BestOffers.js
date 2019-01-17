import React, {Component} from 'react';
import Slider from "react-slick";

class BestOffers extends Component{
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

        const settings_md = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2
        };

        return (
            <div className="best-offer-bg">
                <div className="container">
                    <h3 className="mb-4 text-md-left text-lg-left text-center">
                        Best Offers
                    </h3>

                    <div className="d-lg-flex justify-content-between align-items-center d-none">
                        <div>
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/1.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                30% off on Women
                                Hockey
                            </p>
                        </div>
                        <div>
                            <div className={'best-offer-box mb-4 t '}>
                                <img src="/assets/images/best_offers/2.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                    50% off on Basket Ball
                            </p>
                        </div>
                        <div>
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/3.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                20% off on Hockey
                            </p>
                        </div>
                        <div>
                            <button type='button' className="btn btn-primary partner px-5 py-2 skew-rotate">
                            <span className="remove-skew-rotate">
                                View All
                            </span>
                            </button>
                        </div>
                    </div>

                    {/* responsive */}

                    <Slider {...settings} className={"row d-block d-lg-none d-md-none mb-5"}>

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/1.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                30% off on Women
                                Hockey
                            </p>
                        </div>

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/2.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                50% off on Basket Ball
                            </p>
                        </div>

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/3.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                20% off on Hockey
                            </p>
                        </div>

                    </Slider>

                    {/* md */}

                    <Slider {...settings_md} className={"row d-md-block d-none d-lg-none mb-5 tournament"}  >

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/1.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                30% off on Women
                                Hockey
                            </p>
                        </div>

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/2.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                50% off on Basket Ball
                            </p>
                        </div>

                        <div className="col-8 offset-2">
                            <div className={'best-offer-box mb-4'}>
                                <img src="/assets/images/best_offers/3.svg" alt=""/>
                            </div>
                            <p className={'text-white font-20'}>
                                20% off on Hockey
                            </p>
                        </div>

                    </Slider>

                    <div className={'d-flex justify-content-center d-md-none d-lg-none'}>
                        <button type='button' className="btn btn-primary partner px-5 py-2 skew-rotate">
                            <span className="remove-skew-rotate">
                                View All
                            </span>
                        </button>
                    </div>

                </div>

                <div className="divider down-right">
                    <div></div>
                </div>
            </div>

        );
    }
};

export default BestOffers;