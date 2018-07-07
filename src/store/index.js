import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import middlewares from '../middleware'
import reducers from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const state = {}
const enhancers = []
const middleware = [
    sagaMiddleware,
    ...middlewares
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    reducers,
    state,
    composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store