import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import ThunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

const store = () => {
    return createStore(rootReducer, bindMiddleware([ThunkMiddleware]))
}

export const wrapper = createWrapper(store)
