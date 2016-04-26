import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux'
import  { increment, decrement, incrementIfOdd } from './actions'
import { logger, thunk} from './middlerwares'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        logger
    )
)

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

store.dispatch(incrementIfOdd())
