import React from 'react';
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import HeaderSlider from "./HeaderSlider";
// import Proba from '../assets/images/win_matches/Winner-PNG-Image.svg'

const Header = (props) => {
    return (
        <header>
            {/* headerBackground -> orange */}
            <div className="headerBackground">

                {/* header is the clipped element */}
                <div className="header">
                    <div className={'container'}>
                        <FirstSection />
                    </div>

                    <div className={'d-none d-lg-block bg-black-primary text-white'}>
                        <SecondSection />
                    </div>
                </div>
            </div>
            <div className={'bg-white py-1'}>
                <ThirdSection />
            </div>

            <div className="sliderContent">
                <div className='slider-bg'>
                    <HeaderSlider />
                </div>

                <div className="tournamentInfo">
                    <div className="headersInfo">
                        <h4 className="liveScr">Live Score</h4>
                        <h2>Name of Tournament</h2>
                        <h4>Team1 VS Team2</h4>
                    </div>
                    <div className="team1Info">
                        <h3 className="trackTeamInfo">Team 1</h3>
                        <h3>Run rate : 3</h3>
                        <h3>Runs</h3>
                        <h3>Wickets</h3>
                        <h3>50 / 102</h3>
                        <h3>01</h3>
                    </div>
                    <div className="team2Info">
                        <h3 className="trackTeamInfo">Team 2</h3>
                        <h3>Run rate : 3</h3>
                        <h3>Runs</h3>
                        <h3>Wickets</h3>
                        <h3>50 / 102</h3>
                        <h3>01</h3>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;