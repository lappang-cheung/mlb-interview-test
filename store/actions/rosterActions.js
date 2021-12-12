import * as actions from '../actions/actionTypes'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get roster
export const getMLBRoster = (teamID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_ROSTER_START })

    try {
        const result = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamID}/roster`)
        const MLBData = await result.json()
        const { roster } = MLBData
        dispatch({
            type: actions.GET_ROSTER_SUCCESS,
            payload: roster
        })

    } catch (error) {
        dispatch({
            type: actions.GET_ROSTER_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_ROSTER_END })
}