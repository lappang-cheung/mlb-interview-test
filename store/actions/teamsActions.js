import * as actions from '../actions/actionTypes'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get all the MLB teams
export const getMLBTeams = () => async(dispatch, getState) => {
    dispatch({ type: actions.GET_TEAMS_START })

    try {
        const result = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1')
        const MLBData = await result.json()
        const { teams } = MLBData
        dispatch({
            type: actions.GET_TEAMS_SUCCESS,
            payload: teams
        })

    } catch (error) {
        dispatch({
            type: actions.GET_TEAMS_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_TEAMS_END })
}