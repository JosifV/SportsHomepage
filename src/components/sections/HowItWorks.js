import React from 'react';

const HowItWorks = (props) => {
    return (
        <div className="how-it-works-bg">

            <div className="divider up-right">
                <div></div>
            </div>

            <h3 className={'how-it-works-title text-center mb-3 d-none d-md-block d-lg-block'}>How it works?</h3>

            <img src="/assets/images/ftsflow.svg" alt="" className={'m-auto py-5 d-none d-md-block mw-100'}/>

            <div className="container">
                <div className="row remove-margin-responsive">
                    <div className="col-12 mb-5 col-md-6 text-center">
                        <h5>Want to play a sport?</h5>
                        <button type={'button'} className='btn btn-dark-orange text-uppercase skew-rotate button-big'>
                                <span className="remove-skew-rotate">
                                    Book N play
                                </span>
                        </button>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <h5>Looking for a sports trainer?</h5>
                        <button type={'button'} className='btn btn-orange text-uppercase text-white skew-rotate button-big'>
                                <span className="remove-skew-rotate">
                                    Learn a sport
                                </span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="divider down-right">
                <div></div>
            </div>

        </div>
    );
};

export default HowItWorks;