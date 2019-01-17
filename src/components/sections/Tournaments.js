import React, {Component} from 'react';
import Slider from "react-slick";
import TournamentCard from "./TournamentCard";

class Tournaments extends Component{
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
            <div className='tournament-bg'>
                <div className="respCont container tournament-container">

                    <h3 className="text-orange mb-4 text-center text-md-center text-lg-left">
                        Tournaments
                    </h3>

                    <div className="d-lg-flex d-none justify-content-between ">

                        <div className="d-flex justify-content-between tournament">
                            <div className="card border-radius" style={{'width': '16rem'}}>
                                <img className="card-img-top crop-img"
                                     src="/assets/images/tournaments/qatarsports-footballqatar.svg" alt=""/>
                                <div className="card-body bg-black-primary">
                                    <h5 className="card-title text-white">Name of tournament</h5>

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <img src="/assets/images/icons/location.svg" alt=""/>
                                            <button type={'button'} className={'btn btn-link'}>
                                                Location
                                            </button>
                                        </div>
                                        <button type={'button'} className='btn btn-primary partner'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between tournament">
                            <div className="card border-radius" style={{'width': '16rem'}}>
                                <img className="card-img-top crop-img"
                                     src="/assets/images/tournaments/TennisBallOnCourt.svg" alt=""/>
                                <div className="card-body bg-black-primary">
                                    <h5 className="card-title text-white">Name of tournament</h5>

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <img src="/assets/images/icons/location.svg" alt=""/>
                                            <button type={'button'} className={'btn btn-link'}>
                                                Location
                                            </button>
                                        </div>
                                        <button type={'button'} className='btn btn-primary partner'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between tournament">
                            <div className="card border-radius" style={{'width': '16rem'}}>
                                <img className="card-img-top crop-img" src="/assets/images/tournaments/Badminton Tournaments.svg" alt=""/>
                                <div className="card-body bg-black-primary">
                                    <h5 className="card-title text-white">Name of tournament</h5>

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <img src="/assets/images/icons/location.svg" alt=""/>
                                            <button type={'button'} className={'btn btn-link'}>
                                                Location
                                            </button>
                                        </div>
                                        <button type={'button'} className='btn btn-primary partner'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between tournament">
                            <div className="card border-radius" style={{'width': '16rem'}}>
                                <img className="card-img-top crop-img"
                                     src="/assets/images/tournaments/qatarsports-footballqatar.svg" alt=""/>
                                <div className="card-body bg-black-primary">
                                    <h5 className="card-title text-white">Name of tournament</h5>

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <img src="/assets/images/icons/location.svg" alt=""/>
                                            <button type={'button'} className={'btn btn-link'}>
                                                Location
                                            </button>
                                        </div>
                                        <button type={'button'} className='btn btn-primary partner'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <button type={'button'} className='btn btn-primary partner px-5 py-2 skew-rotate'>
                            <span className="remove-skew-rotate">
                                View All
                            </span>
                            </button>
                        </div>

                    </div>

                    {/* md */}

                    <Slider {...settings_md} className={"row d-md-block d-none d-lg-none mb-5 tournament"}  >

                        <TournamentCard url={'qatarsports-footballqatar.svg'}/>
                        <TournamentCard url={'TennisBallOnCourt.svg'}/>
                        <TournamentCard url={'Badminton Tournaments.svg'}/>
                        <TournamentCard url={'qatarsports-footballqatar.svg'}/>

                    </Slider>

                    {/*responsive*/}

                    <Slider {...settings} className={"row d-block d-lg-none d-md-none mb-5 tournament"}  >

                        <TournamentCard url={'qatarsports-footballqatar.svg'}/>
                        <TournamentCard url={'TennisBallOnCourt.svg'}/>
                        <TournamentCard url={'Badminton Tournaments.svg'}/>
                        <TournamentCard url={'qatarsports-footballqatar.svg'}/>

                    </Slider>

                    <div className="respEl d-flex d-md-none d-lg-none justify-content-center">
                        <button type={'button'} className='btn btn-primary partner px-5 py-2 skew-rotate'>
                            <span className="remove-skew-rotate">
                                View All
                            </span>
                        </button>
                    </div>

                </div>

                <div className="divider down-left">
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Tournaments;