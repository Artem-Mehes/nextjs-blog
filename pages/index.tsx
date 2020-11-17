import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';
import { IPost, IState } from '../interfaces';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { initializeStore } from '../store/store';
import { useSelector } from 'react-redux';
import { getPosts } from '../store/actions';
import { FunctionComponent } from 'react';

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const NewPostLink = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.btnColor};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.accent};

    &:hover {
        text-decoration: none;
        background-color: ${({ theme }) => theme.colors.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.active};
    }
`;

const ListItem = styled.li`
    margin: 1rem 0;
`;

const PostLink = styled.a`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.accent};
`;

const Home: FunctionComponent = () => {
    const posts: Array<IPost> = useSelector((state: IState) => state.posts);

    return (
        <Layout title={'Latest Posts'} home>
            <Inner>
                <h2>Latest Posts</h2>
                <Link href="/posts/new">
                    <NewPostLink>Create New Post</NewPostLink>
                </Link>
            </Inner>
            <ul>
                {posts.map((post: IPost) => {
                    const { id, title } = post;

                    return (
                        <ListItem key={id}>
                            <Link href={`posts/${id}`}>
                                <PostLink>{title}</PostLink>
                            </Link>
                        </ListItem>
                    );
                })}
            </ul>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const response = await axios.get(process.env.API_URL);
    const posts: Array<IPost> = response.data.filter((post: IPost) => post.body && post.title);

    dispatch(getPosts(posts));
    return { props: { initialReduxState: reduxStore.getState() } };
};

export default Home;
