import {combineReducers} from 'redux'

const defaultState = {
    tracks: []
}

function tracksReducer(currentState = defaultState.tracks, action) {
    switch (action.type) {
        case "add_tracks_from_fetch":
            return action.payload
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    tracks: tracksReducer
})

export default rootReducer