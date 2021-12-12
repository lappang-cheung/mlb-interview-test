import * as actions from './actionTypes'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get player
export const getMLBPlayer = (playerID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_PLAYER_START })

    try {
        const result = await fetch(`https://statsapi.mlb.com/api/v1/people/${playerID}`)
        const MLBData = await result.json()
        const { people } = MLBData
        dispatch({
            type: actions.GET_PLAYER_SUCCESS,
            payload: people
        })

    } catch (error) {
        dispatch({
            type: actions.GET_PLAYER_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_PLAYER_END })
}