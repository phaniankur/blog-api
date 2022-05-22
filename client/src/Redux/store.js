import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createPostReducers, deletePostReducers, getAllPostsReducers } from './reducers/postReducer';
import { userLoginReducers } from './reducers/userReducer';

const reducer = combineReducers({
    userLogin: userLoginReducers,

    getAllPosts : getAllPostsReducers,
    createPost: createPostReducers,
    deletePost: deletePostReducers
});

const initialState = {

};
const middleware = [ thunk ];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
