import React from 'react';
import {Route, Switch} from 'react-router-dom'

function Track(props) {
    return (
        <div>
            <Switch>
                <Route path="/tracks/:id" render={() => <h1>{props.songObj.title}</h1>} />
                <Route path="/tracks" render={() => <h1>{props.songObj.title}</h1>} />
            </Switch>
        </div>
    );
}

export default Track;