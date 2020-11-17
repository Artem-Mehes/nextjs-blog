import { useMemo } from 'react';
import { createStore, Store } from 'redux';
import { IState, GetPostsAction } from '../interfaces';
import initialState from './initialState';
import getPostsReducer from './getPostsReducer';

let store: Store<IState, GetPostsAction>;

const initStore = (preloadedState: IState = initialState): Store<IState, GetPostsAction> => {
    return createStore(getPostsReducer, preloadedState);
};

export const initializeStore = (preloadedState?: IState): Store<IState, GetPostsAction> => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });

        store = undefined;
    }

    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
};

export const useStore = (initialState: IState): Store<IState, GetPostsAction> => {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
};
