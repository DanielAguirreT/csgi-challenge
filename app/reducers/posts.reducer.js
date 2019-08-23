import Immutable from 'seamless-immutable';
import {
    RETRIEVE_POSTS,
    ADD_POST_TO_LIST,
    SAVE_POSTS
} from '../actions/posts.actions';

export const INITIAL_STATE = Immutable({
    postsList: [],
    error: {},
    isFetching: false,
    notSavedPosts:[]
});

export default function postReducer(state = INITIAL_STATE, {type, payload = {}}) {
    switch (type) {
        case RETRIEVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_POSTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_POSTS.SUCCESS:
            let newPostList = [...state.postsList, ...payload];
            return state
                .set('postsList', newPostList)
                .set('isFetching', false)
        case SAVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case SAVE_POSTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case SAVE_POSTS.SUCCESS:
            // let newPostList = [...state.postsList, ...payload];
            return state
                // .set('postsList', newPostList)
                .set('isFetching', false)
        case ADD_POST_TO_LIST:
            let nextPostList = [...state.postsList];
            let notSavedPosts =  [...state.notSavedPosts];
            nextPostList.push(payload.body)
            notSavedPosts.push(payload.body)
            return state
                    .set('postsList', nextPostList)
                    .set('notSavedPosts', notSavedPosts);
        default:
            return state;
    }
}