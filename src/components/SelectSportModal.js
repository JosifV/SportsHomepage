import React from 'react';

const SelectSportModal = (props) => {
    return (
        <div className="modal fade" id="select-sport" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">

                    <div className="modal-header border-0">

                        <div className='d-flex flex-column w-100'>
                            <img src="/assets/images/icons/shoot-ball-modal.svg" alt=""/>
                            <span className="office-border-bottom"/>
                            <h5 className="text-center text-orange">Select Sport</h5>
                        </div>

                        <button type="button" className="close position-absolute" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">

                        <h4>All sports</h4>
                        <div className="sport-category-divider"/>

                        <ul className="sports-list list-unstyled d-flex row">
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cricket">
                                    <img src={"/assets/images/sport-categories/cricket.svg"} />
                                    <span>Cricket</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#badminton">
                                    <img src={"/assets/images/sport-categories/badminton.svg"} />
                                    <span>Badminton</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#basketball">
                                    <img src={"/assets/images/sport-categories/basketball.svg"} />
                                    <span>Basketball</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#boxing">
                                    <img src={"/assets/images/sport-categories/boxing-glove.svg"} />
                                    <span>Boxing</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cycling">
                                    <img src={"/assets/images/sport-categories/bicycle.svg"} />
                                    <span>Cycling</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#pingpong">
                                    <img src={"/assets/images/sport-categories/ping-pong.svg"} />
                                    <span>Table Tennis</span>
                                </a>
                            </li>
                        </ul>



                        <h4>Fitness</h4>
                        <div className="sport-category-divider"/>

                        <ul className="sports-list list-unstyled d-flex row">
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cricket">
                                    <img src={"/assets/images/sport-categories/cricket.svg"} />
                                    <span>Cricket</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#badminton">
                                    <img src={"/assets/images/sport-categories/badminton.svg"} />
                                    <span>Badminton</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#basketball">
                                    <img src={"/assets/images/sport-categories/basketball.svg"} />
                                    <span>Basketball</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#boxing">
                                    <img src={"/assets/images/sport-categories/boxing-glove.svg"} />
                                    <span>Boxing</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cycling">
                                    <img src={"/assets/images/sport-categories/bicycle.svg"} />
                                    <span>Cycling</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#pingpong">
                                    <img src={"/assets/images/sport-categories/ping-pong.svg"} />
                                    <span>Table Tennis</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cricket">
                                    <img src={"/assets/images/sport-categories/cricket.svg"} />
                                    <span>Cricket</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#badminton">
                                    <img src={"/assets/images/sport-categories/badminton.svg"} />
                                    <span>Badminton</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#basketball">
                                    <img src={"/assets/images/sport-categories/basketball.svg"} />
                                    <span>Basketball</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#boxing">
                                    <img src={"/assets/images/sport-categories/boxing-glove.svg"} />
                                    <span>Boxing</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cycling">
                                    <img src={"/assets/images/sport-categories/bicycle.svg"} />
                                    <span>Cycling</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#pingpong">
                                    <img src={"/assets/images/sport-categories/ping-pong.svg"} />
                                    <span>Table Tennis</span>
                                </a>
                            </li>
                        </ul>


                        <h4>Recreational Sports</h4>
                        <div className="sport-category-divider"/>

                        <ul className="sports-list list-unstyled d-flex row">
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cricket">
                                    <img src={"/assets/images/sport-categories/cricket.svg"} />
                                    <span>Cricket</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#badminton">
                                    <img src={"/assets/images/sport-categories/badminton.svg"} />
                                    <span>Badminton</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#basketball">
                                    <img src={"/assets/images/sport-categories/basketball.svg"} />
                                    <span>Basketball</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#boxing">
                                    <img src={"/assets/images/sport-categories/boxing-glove.svg"} />
                                    <span>Boxing</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#cycling">
                                    <img src={"/assets/images/sport-categories/bicycle.svg"} />
                                    <span>Cycling</span>
                                </a>
                            </li>
                            <li className={'col col-md-2 col-4'}>
                                <a href="#pingpong">
                                    <img src={"/assets/images/sport-categories/ping-pong.svg"} />
                                    <span>Table Tennis</span>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="modal-footer border-0 pt-0">
                        <button type="submit" className="btn btn-orange d-block mx-auto px-5">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelectSportModal;