import * as actions from '../actions/actionTypes'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get all the MLB teams
export const getMLBTeam = (teamID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_TEAM_START })
    try {
        const result = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamID}`)
        const MLBData = await result.json()
        const { teams } = MLBData
        dispatch({
            type: actions.GET_TEAM_SUCCESS,
            payload: teams
        })

    } catch (error) {
        dispatch({
            type: actions.GET_TEAM_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_TEAM_END })
}