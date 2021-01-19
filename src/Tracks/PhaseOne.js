import React from 'react';
import Leaderboard from './Creative/Leaderboard'

function PhaseOne(props) {
    
    function renderImages(){
       return props.songObj.ref_imgs.map(image => <img src={image.img_url} alt="" key={image.id}/>)
    }


    return (
        <div>
            <Leaderboard />
        </div>
    );
}

export default PhaseOne;