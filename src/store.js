
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {movieListReducer,movieDetailsReducer,movieSearchReducer} from './reducer/MovieReducer'

const reducer = combineReducers({
    movieList:movieListReducer,
    movieDetails:movieDetailsReducer,
    movieSearch:movieSearchReducer
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store