import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleFonts from 'next-google-fonts';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="keywords" content="next,javascript,react,blog" />
                    <meta name="description" content="blog" />
                    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
