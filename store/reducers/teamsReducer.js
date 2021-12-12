import * as actions from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    teams: []
}

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case actions.GET_TEAMS_START:
            return { ...state, loading: true }
        case actions.GET_TEAMS_SUCCESS:
            return { ...state, loading: false, error: false, teams: payload }
        case actions.GET_TEAMS_FAIL:
            return { ...state, loading: false, error: payload }
        case actions.GET_TEAMS_END:
            return { ...state, loading: false }
        default:
            return state
    }
}