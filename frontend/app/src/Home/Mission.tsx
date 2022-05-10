// Create function called Mission that returns JSX
import MainHeader from './MainHeader';
import './Mission.css'

function Mission() {
    return (
        <div>
            <MainHeader />
            <div className="backgroundMissionBox">
                <h1 className="missionTitle">Mission Statement</h1>
                <div className="foregroundMissionBox">
                    <div>
                        <p className="missionStatement">
                            There is no standard quantifiable measure to measure the severity of symptoms in Parkinson's
                            patients for everyday life in a single doctor’s visit -- treatment adjustments are
                            suboptimal. Therefore, there is a strong need to translate the everyday experiences the
                            patient is having in such a way that the doctors can readily understand and adjust
                            treatment needs.
                        </p>
                        <p className="missionEnding">
                            FollowUp aims to fulfill that need.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;