import Head from 'next/head';
import { LayoutProps } from '../interfaces';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const Header = styled.header`
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 3rem;
    margin: 3rem 0;
`;

const Footer = styled.footer`
    margin-top: 4rem;
`;

const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.accent};
`;

const Layout = ({ children, title = 'Blog', home }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <Header>
                    <Heading>Blog</Heading>
                </Header>

                <main>{children}</main>

                {!home && (
                    <Footer>
                        <Link href="/">
                            <FooterLink>← Back to All Posts</FooterLink>
                        </Link>
                    </Footer>
                )}
            </Container>
        </>
    );
};

export default Layout;
