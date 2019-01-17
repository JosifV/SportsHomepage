import React from 'react';

const WinMatches = (props) => {
    return (
        <div className='partner-with-us'>
            <div className="container">

                <div className="row">

                    <div className="col-8 offset-2">
                        <h3 className={'d-md-none d-lg-none mb-4'}>
                            Why Partner With Us
                        </h3>
                    </div>

                    <div className="col-md-6 mb-3 mb-md-0">
                        <img src="/assets/images/Handshake-yellow.png" alt="" className={'d-block m-auto'}/>
                    </div>

                    <div className="col-md-6">
                        <h3 className={'d-none d-md-block d-lg-block'}>Why Partner With Us</h3>

                        <p className={'p-4 p-md-0 p-lg-0'}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary. There are many
                            variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly
                            believable. If you
                        </p>

                        <div className="col-6 offset-3 offset-md-0 offset-lg-0">
                            <button type="button" className="btn btn-orange text-black-primary border-black px-4 py-2 skew-rotate">
                            <span className="remove-skew-rotate py-1 px-2">
                                <b>Partner With Us</b>
                            </span>
                            </button>
                        </div>
                    </div>



                </div>

            </div>

            <div className="divider down-left">
                <div></div>
            </div>
        </div>
    );
};

export default WinMatches;