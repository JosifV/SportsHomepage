import React from 'react';

const TournamentCard = (props) => {
    return (
        <div className="col-8 offset-2">
            <div className="card border-radius mb-3" style={{'width': '17rem'}}>
                <img className="card-img-top crop-img"
                     src={`/assets/images/tournaments/${props.url}`} alt=""/>
                <div className="card-body bg-black-primary">
                    <h5 className="card-title text-white">Name of tournament</h5>

                    <div className="d-flex justify-content-between">
                        <div className={'d-flex align-items-center'}>
                            <img src="/assets/images/icons/location.svg" alt="" />
                            <button type={'button'} className={'btn btn-link'}>
                                Location
                            </button>
                        </div>

                        <button type={'button'} className='btn btn-primary partner'>Details</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;