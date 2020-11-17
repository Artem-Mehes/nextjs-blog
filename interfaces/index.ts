import { ReactNode } from 'react';
import 'styled-components';

export interface LayoutProps {
    children: ReactNode;
    title: string;
    home?: boolean;
}

export interface IPost {
    id: number | string;
    title: string;
    body: string;
}

export interface IState {
    posts: Array<IPost>;
}

export interface GetPostsAction {
    type: string;
    posts: Array<IPost>;
}

declare module 'styled-components' {
    export interface ITheme {
        colors: {
            [key: string]: string;
        };
    }
}

export interface ShowMessageProp {
    isShowed: boolean;
}
