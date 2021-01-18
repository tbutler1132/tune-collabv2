import React, { Component } from 'react';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {getTracks} from '../Redux/action'
import Track from './Track'

class TrackContainer extends Component {


    componentDidMount = () => {
        this.props.fetchTracks()
    }


    renderTracks = () => {
        return this.props.tracks.map(songObj => <Track key={songObj.id} songObj={songObj} />)
    }

    render() {
        console.log(this.props)
        return(
            <>
            {this.props.user ?
            <div>
            {this.props.tracks.length === 0 ? <p>Loading</p> :
                <Switch>

                    <Route path="/tracks/:id" render={({match}) => {
                        const id = parseInt(match.params.id)
                        const foundTrack = this.props.tracks.find((track) => track.id === id)
                        return <Track songObj={foundTrack} user={this.props.user}/>
                    }}/>

                    <Route path="/tracks" render={() =>
                        <div className="track-index-container">
                            {this.renderTracks()}
                        </div>                     
                    } />

                </Switch>
            }
            </div>
            :
            null            
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {tracks: state.tracks}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchTracks: () => dispatch(getTracks())}
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
    (TrackContainer)