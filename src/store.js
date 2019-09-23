import { createStore, combineReducers } from 'redux'
import home from './reducers/home'
import common from './reducers/common'
import auth from './reducers/auth'

const store = createStore(
  combineReducers({
      home,
      common,
      auth
  })
)

export default store