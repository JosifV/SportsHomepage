import React from 'react';

const Footer = (props) => {
    return (
        <footer className={'site-footer'}>
            <div className="text-white py-5 container">
                <div className={'container'}>
                    <div className="row">
                        <div className="col-md-4 pr-5 mb-4">
                            <div className="bg-white pb-1 pt-2 pl-2 d-inline-block mb-3">
                                <img src="/assets/images/footer/fts8.png" alt=""/>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum,
                            </p>
                        </div>

                        <div className="col-md-4 d-flex justify-content-start justify-content-md-center mb-4">
                            <ul className={'footer-menu p-0'}>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Partner With Us</a>
                                </li>
                                <li>
                                    <a href="#">Reward points</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Policy</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <p>
                                <img src="/assets/images/icons/email_white.svg" alt="" className={'email-white-icon'}/>
                                <span className={'ml-2'}>ftpsupport@gmail.com</span>
                            </p>
                            <p>
                                <img src="/assets/images/icons/phone_white.svg" alt="" className={'phone-white-icon'}/>
                                <span className={'ml-3'}>895233123</span>
                            </p>

                            <ul className='social-icons mb-4'>
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

                            <div className="d-lg-flex d-none justify-content-between subscribe">
                                <input className="form-control" type="text" placeholder="Your email"/>
                                <button className="ml-2 btn btn-orange">Subscribe now</button>
                            </div>

                            <div className="d-lg-none">
                                <input className="form-control mb-2" type="text" placeholder="Your email"/>
                                <button className="btn btn-orange btn-block">Subscribe now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-white py-3 text-center">
                © 2018 ftsgroup All rights reserved
            </div>
        </footer>
    );
};

export default Footer;