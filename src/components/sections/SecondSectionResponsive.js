import React from 'react';

const SecondSectionResponsive = (props) => {
    return (

        <>
        <div className="bg-black-primary text-white mb-3">

            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center p-3">
                    <button type="button" className="btn btn-outline-primary btn-block btn-md-inline mb-1 mb-md-0 mr-md-2">Log in</button>

                    <button type="button" className="btn btn-orange btn-block btn-md-inline m-0 ml-md-2 text-black-primary ">Sign up</button>
                </div>
            </div>

        </div>

        <div className="bg-white text-black-primary">

            <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="header-logo d-flex justify-content-center align-items-center">
                    <div className="offers-badge mr-2 mb-3">
                        <img src="/assets/images/vector-2.svg" alt=""/>
                        <div className="vector-txt">Offers</div>
                    </div>
                </div>

                <button type={'button'} className='btn btn-black-primary btn-block partner-responsive skew-rotate fix-button-height'>
                    <span className={'remove-skew-rotate'}>Partner with us</span>
                </button>

                <div>
                    <ul className='partner-items d-flex justify-content-center align-items-center mb-2'>
                        <li className='partner-icon'>
                            <button type="button" className="btn btn-link text-black-primary">
                                <img src="/assets/images/wallet-black.svg" alt="" className={'mb-1'}/>
                                <p>Wallet</p>
                            </button>
                        </li>
                        <li className={'partner-icon mr-2'}>
                            <button type="button" className="btn btn-link text-black-primary">
                                <img src="/assets/images/icons/shopping-black.svg" alt="" className={'mb-1'}/>
                                <p>Shopping</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    );
};

export default SecondSectionResponsive;