import React, { Component } from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import {withRouter} from "react-router-dom";
import ResponsiveSlider from './components/ResponsiveSlider'
import HeaderSlider from './components/HeaderSlider'

class App extends Component {
  render() {
    return (
      <>
       <Header/>

        <div>
            <Body/>
        </div> 

      </>
    );
  }
}

export default withRouter(App);
