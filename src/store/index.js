import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const state = {}
const enhancers = []
const middleware = [
    sagaMiddleware
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    console.log,
    state,
    composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store