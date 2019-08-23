import {combineReducers} from 'redux';
import PostsReducer from './posts.reducer';
import {router} from 'redux-ui-router';

export const AppReducer = combineReducers({
    router,
    posts: PostsReducer
});