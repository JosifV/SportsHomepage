import React, {Component} from 'react';
import Slider from "react-slick";

class ResponsiveSlider extends Component {

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
            <div className={'container text-white py-5'}>


                <Slider {...settings} className={'main-slider'}>
                    <div className="card slider-responsive">

                        <img src="/assets/images/header_players.svg" className='header-players' alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Feel the sport</h5>
                            <p className="card-text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                            <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                Book N Play
                            </button>
                        </div>
                    </div>

                    <div className="card slider-responsive">

                        <img src="/assets/images/header_players.svg" className='header-players' alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Slider img 2</h5>
                            <p className="card-text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                            <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                Book N Play
                            </button>
                        </div>
                    </div>

                    <div className="card slider-responsive">

                        <img src="/assets/images/header_players.svg" className='header-players' alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Slider img 3</h5>
                            <p className="card-text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                            <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                Book N Play
                            </button>
                        </div>
                    </div>

                    <div className="card slider-responsive">

                        <img src="/assets/images/header_players.svg" className='header-players' alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Slider img 4</h5>
                            <p className="card-text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                            <button type={'button'} className="btn btn-outline-orange text-uppercase">
                                Book N Play
                            </button>
                        </div>
                    </div>


                    {/*<div className="row d-flex align-items-center">*/}

                    {/*<div className="col-6">*/}
                    {/*<img src="/assets/images/header_players.svg" className='header-players' alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-6">*/}
                    {/*<h1>Feel the sport</h1>*/}
                    {/*<p>*/}
                    {/*It is a long established fact that a reader will be distracted by*/}
                    {/*the readable content of a page when looking at its layout.*/}
                    {/*</p>*/}
                    {/*<button type={'button'} className="btn btn-outline-orange text-uppercase">*/}
                    {/*Book N Play*/}
                    {/*</button>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </Slider>

            </div>
        );
    }
}

export default ResponsiveSlider;