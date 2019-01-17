import React from 'react';
import '../../styles/components/winMatch.scss'
import Proba from '../../assets/running.png'

const WinMatches = (props) => {
    return (
        <div className="abv">
            <div className='bg-black-primary text-white py-5'>
                <div className="container">
                    <div className="divResp d-flex justify-content-start align-items-center">
                        <div>
                            <img src="/assets/images/win_matches/Winner-PNG-Image.svg" alt="" className={'imgWin ml-4 mr-5'} />
                        </div>

                        <div>
                            <h2 className={'mr-5'}>Win matches &<br />  <span className="text-orange">win reward points</span> </h2>
                        </div>

                        <div>
                            <button type={'button'} className="btnFloat btn btn-outline-orange text-uppercase skew-rotate">
                                <span className="remove-skew-rotate">
                                    Know More
                        </span>
                            </button>
                        </div>
                    </div>
                    <img className="imgRunningMan" src={Proba} alt="notFound" />
                </div>
            </div>
        </div>
    );
};

export default WinMatches;