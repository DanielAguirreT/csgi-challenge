import {createSelector} from 'reselect';

export const GetPostsState = state => state.posts;


export const GetPostsListSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.postsList;
    }
);