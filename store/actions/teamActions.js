import * as actions from '../actions/actionTypes'
import axios from 'axios'

// Clean up messages
export const clean = () => {
    type: actions.CLEAN_UP
}

// Get all the MLB teams
export const getMLBTeam = (teamID) => async(dispatch, getState) => {
    dispatch({ type: actions.GET_TEAM_START })
    try {
        const res = await axios.get(`https://statsapi.mlb.com/api/v1/teams/${teamID}`)

        if (res.status === 200) {
            const {data: { teams }} = res
            dispatch({
                type: actions.GET_TEAM_SUCCESS,
                payload: teams
            })
        }

    } catch (error) {
        dispatch({
            type: actions.GET_TEAM_FAIL,
            payload: error
        })
    }
    dispatch({ type: actions.GET_TEAM_END })
}