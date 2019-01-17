import React from 'react';

const SecondSection = (props) => {
    return (

            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <div className="header-logo d-flex justify-content-center align-items-center">
                        <div className="offers-badge mr-2">
                            <img src="/assets/images/vector-2.svg" alt=""/>
                            <div className="vector-txt">Offers</div>
                        </div>
                        <button type={'button'} className='btn btn-primary partner skew-rotate fix-button-height'>
                            <span className={'remove-skew-rotate'}>Partner with us</span>
                        </button>
                    </div>
                    <div>
                        <ul className='partner-items d-flex align-items-center'>
                            <li className='partner-icon'>
                                <button type="button" className="btn btn-link text-white">
                                    <img src="/assets/images/wallet.svg" alt="" className={'mb-1'}/>
                                    <p>Wallet</p>
                                </button>
                            </li>
                            <li className={'partner-icon'}>
                                <button type="button" className="btn btn-link text-white">
                                    <img src="/assets/images/icons/shopping.svg" alt="" className={'mb-1'}/>
                                    <p>Shopping</p>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="btn btn-outline-primary mr-2">Log in</button>
                            </li>

                            <li>
                                <button type="button" className="btn btn-orange text-black">Sign up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default SecondSection;