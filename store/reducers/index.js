import { combineReducers } from 'redux'

import teamsReducer from './teamsReducer'
import teamReducer from './teamReducer'
import rosterReducer from './rosterReducer'
import playerReducer from './playerReducer'

export default combineReducers({
    teams: teamsReducer,
    team: teamReducer,
    roster: rosterReducer,
    player: playerReducer
})
