import React, { Component } from 'react';

class SelectCityModal extends Component {
    state = {
        // declare a state
    };

    render() {
        return (
            <div className="modal fade" id="select-city" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">

                        <div className="modal-header border-0">

                            <div className='d-flex flex-md-column w-100'>
                                <img src="/assets/images/icons/office-building-modal.svg" alt=""/>
                                <span className="office-border-bottom"/>
                                <h5 className="text-center text-orange">Select City</h5>
                            </div>

                            <button type="button" className="close position-absolute" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">

                            <div className="row cities-list">
                                <div className="col col-12 col-sm-6">
                                    <button className="btn btn-block btn-outline-orange">Delhi</button>
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <button className="btn btn-block btn-outline-orange">Nagpur</button>
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <button className="btn btn-block btn-outline-orange">Mumbai</button>
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <button className="btn btn-block btn-outline-orange">Chandigarh</button>
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button type="submit" className="btn btn-orange d-block mx-auto px-5">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SelectCityModal;