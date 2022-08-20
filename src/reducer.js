import { combineReducers } from 'redux'

import todosReducer from './../src/component/features/todos/todosSlice'
import filtersReducer from '../src/component/features/filters/filterSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
