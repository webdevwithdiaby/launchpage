import React from 'react';
import {Route, Switch, useLocation, useParams, useRouteMatch} from 'react-router-dom';
import AboutMe from './AboutMe';
import AboutTeam from './AboutTeam';

function About() {
    const {path} = useRouteMatch();
    return (
        <div>
            <h4 className="title"> About </h4>
            <Switch>
                <Route path={`${path}/me`} component={AboutMe} />
                <Route path={`${path}/team`} component={AboutTeam} />
            </Switch>
        </div>
    )
}

export default About
