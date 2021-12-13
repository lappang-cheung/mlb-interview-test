import * as actions from '../actions/actionTypes'
import axios from 'axios'

// Get roster
export const getMLBRoster = (teamID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_ROSTER_START })

    try {
        const res = await axios.get(`https://statsapi.mlb.com/api/v1/teams/${teamID}/roster`)
        if (res.status === 200) {
            const {data: { roster }} = res
            dispatch({
                type: actions.GET_ROSTER_SUCCESS,
                payload: roster
            })
        }
    } catch (error) {
        dispatch({
            type: actions.GET_ROSTER_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_ROSTER_END })
}