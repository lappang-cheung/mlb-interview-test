import * as actions from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    roster: []
}

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case actions.GET_ROSTER_START:
            return { ...state, loading: true }
        case actions.GET_ROSTER_SUCCESS:
            return { ...state, loading: false, error: false, roster: payload }
        case actions.GET_ROSTER_FAIL:
            return { ...state, loading: false, error: payload, roster: [] }
        case actions.GET_ROSTER_END:
            return { ...state, loading: false }
        default:
            return state
    }
}