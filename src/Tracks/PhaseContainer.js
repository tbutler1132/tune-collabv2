import React from 'react';
import PhaseOne from './PhaseOne'
import PhaseTwo from './PhaseTwo'
import TrackNav from './Selection/TrackNav'
import Poll from './Selection/Poll'
import ImageIndex from './Selection/ImageIndex'
import DiscussionThread from './Selection/DiscussionThread'

function PhaseContainer(props) {
    return (
        <div>
            <PhaseTwo songObj={props.songObj}/>
            <TrackNav />
            <Poll />
            <ImageIndex />
            <DiscussionThread />
        </div>
    );
}

export default PhaseContainer;