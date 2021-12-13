import * as actions from './actionTypes'
import axios from 'axios'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get player
export const getMLBPlayer = (playerID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_PLAYER_START })

    try {
        const res = await axios.get(`https://statsapi.mlb.com/api/v1/people/${playerID}`)
        if (res.status === 200) {
            const {data: { people }} = res
            dispatch({
                type: actions.GET_PLAYER_SUCCESS,
                payload: people
            })
        }
    } catch (error) {
        dispatch({
            type: actions.GET_PLAYER_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_PLAYER_END })
}