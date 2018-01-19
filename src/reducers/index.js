import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'
import HelloReducers from './HelloReducers'

export default combineReducers({counter: CounterReducer, hello: HelloReducers})