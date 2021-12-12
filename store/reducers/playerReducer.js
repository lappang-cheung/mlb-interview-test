import * as actions from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    player: []
}

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case actions.GET_PLAYER_START:
            return { ...state, loading: true }
        case actions.GET_PLAYER_SUCCESS:
            return { ...state, loading: false, error: false, player: payload }
        case actions.GET_PLAYER_FAIL:
            return { ...state, loading: false, error: payload }
        case actions.GET_PLAYER_END:
            return { ...state, loading: false }
        default:
            return state
    }
}