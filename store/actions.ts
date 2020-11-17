import { IPost, GetPostsAction } from '../interfaces';

export const getPosts = (posts: Array<IPost>): GetPostsAction => ({ type: 'GET_POSTS', posts });
