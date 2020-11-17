import axios from 'axios';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { ShowMessageProp } from '../../interfaces';

const Heading = styled.h2`
    margin-bottom: 1rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Message = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.active};
    text-align: center;
    margin-bottom: 1rem;
    text-decoration: underline;
    transition: opacity 0.3s;
    opacity: ${({ isShowed }: ShowMessageProp) => (isShowed ? '1' : '0')};
`;

const Input = styled.input`
    margin-bottom: 2rem;
    border: 0;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};

    &:hover {
        border-color: ${({ theme }) => theme.colors.inputHover};
    }

    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.accent};
        caret-color: ${({ theme }) => theme.colors.accent};
        padding: 8px;
    }
`;

const Label = styled.label`
    margin-bottom: 0.6rem;
    pointer-events: none;
`;

const Textarea = styled.textarea`
    resize: none;
    min-height: 200px;
    margin-bottom: 2rem;
    border-color: ${({ theme }) => theme.colors.inputBorder};

    &:hover {
        border-color: ${({ theme }) => theme.colors.inputHover};
    }

    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.accent};
        caret-color: ${({ theme }) => theme.colors.accent};
        padding: 8px;
    }
`;

const Submit = styled.input`
    background-color: ${({ theme }) => theme.colors.accent};
    border: 0;
    color: ${({ theme }) => theme.colors.btnColor};
    min-height: 48px;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
        color: #fff;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.active};
    }
`;

const PostForm: FunctionComponent = () => {
    const [inputs, setInputs] = useState({ title: '', body: '' });
    const [showMessage, setshowMessage] = useState(false);

    const handleChange = ({
        currentTarget,
    }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = currentTarget;

        setInputs((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (inputs.title && inputs.body) {
            axios.post('https://simple-blog-api.crew.red/posts', inputs);
            setshowMessage(true);

            setTimeout((): void => setshowMessage(false), 2000);

            setInputs({ title: '', body: '' });
        }
    };

    return (
        <Layout title={'Create New Post'}>
            <Heading>Create New Post</Heading>
            <Message isShowed={showMessage}>New Post Created</Message>

            <Form onSubmit={handleSubmit}>
                <Label htmlFor="title">New Post Title</Label>
                <Input
                    onChange={handleChange}
                    value={inputs.title}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                />

                <Label htmlFor="body">New Post Body</Label>
                <Textarea
                    onChange={handleChange}
                    value={inputs.body}
                    id="body"
                    name="body"
                    placeholder="Text"
                ></Textarea>

                <Submit type="submit" value="Create" />
            </Form>
        </Layout>
    );
};

export default PostForm;
