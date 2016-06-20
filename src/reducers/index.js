import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from '/reducer_active_book'

//We tell app how to create application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
