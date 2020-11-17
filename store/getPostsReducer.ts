import { GET_POSTS } from './types';
import initialState from './initialState';
import { GetPostsAction, IState } from '../interfaces';

const getPostsReducer = (state: IState = initialState, action: GetPostsAction): IState => {
    const { type, posts } = action;

    switch (type) {
        case GET_POSTS:
            return {
                posts,
            };
        default:
            return state;
    }
};

export default getPostsReducer;
