import axios from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { IPost, IState } from '../../interfaces';

const Post: FunctionComponent = () => {
    const [post, setPost] = useState<IPost>({ id: '', title: '', body: '' });
    const { query } = useRouter();
    const posts: Array<IPost> = useSelector((state: IState) => state.posts);

    useEffect(() => {
        if (query.id && !posts.length) {
            getPost();
        } else {
            const postFromStore: IPost = posts.find((post) => String(post.id) === query.id);

            setPost(postFromStore);
        }
    }, [query, posts]);

    const getPost = async () => {
        const response = await axios(`${process.env.API_URL}/${query.id}`);

        setPost(response.data);
    };

    return (
        <Layout title={`Post ${post && post.id}`}>
            <article>
                <h2>{post && post.title}</h2>
                <p>{post && post.body}</p>
            </article>
        </Layout>
    );
};

export default Post;
