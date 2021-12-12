import * as actions from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    team: []
}

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case actions.GET_TEAM_START:
            return { ...state, loading: true }
        case actions.GET_TEAM_SUCCESS:
            return { ...state, loading: false, error: false , team: payload }
        case actions.GET_TEAM_FAIL:
            return { ...state, loading: false, error: payload }
        case actions.GET_TEAM_END:
            return { ...state, loading: false }
        default:
            return state
    }
}