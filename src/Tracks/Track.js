import React, { useState } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import PhaseContainer from './PhaseContainer'

function Track(props) {

    const [descriptionClicked, showDescription] = useState(false)

    function description(){
        if (descriptionClicked) {
            return props.songObj.description
        } else {
            return <>Show Description</>
        }
    }

    return (
        <div>
            <Switch>
                <Route path="/tracks/:id" render={() =>
                    <div> 
                        <h1>{props.songObj.title}</h1>
                        <p onClick={() => descriptionClicked ? showDescription(false) : showDescription(true)}>{description()}</p>
                        <PhaseContainer songObj={props.songObj}/>
                    </div>
                } />
                <Route path="/tracks" render={() =>
                    <Link to={`tracks/${props.songObj.id}`} style={{ textDecoration: 'none' }} className="track-navlink">
                        <h1>{props.songObj.title}</h1>
                    </Link>  
                }/>
            </Switch>
        </div>
    );
}

export default Track;