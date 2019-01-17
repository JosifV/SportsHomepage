import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        let path = this.props.location.pathname;
        return (
            <div>
                <div className='alert alert-danger text-uppercase'>
                    <h2>ERROR 404</h2>
                    The page <b>{path}</b> doesn't exist
                </div>
            </div>
        )
    }
}

export default PageNotFound;