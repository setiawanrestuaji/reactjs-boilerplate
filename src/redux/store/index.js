import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

const middleware = applyMiddleware(promiseMiddleware, logger)
const store = createStore(
    reducers,
    middleware
)

export default store