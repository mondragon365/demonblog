import { createStore, combineReducers,applyMiddleware } from 'redux'
import home from './reducers/home'
import common from './reducers/common'
import auth from './reducers/auth'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  home,
  common,
  auth
});

const store = createStore(
  reducer,applyMiddleware(thunk)
)

export default store