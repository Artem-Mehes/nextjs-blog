import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ITheme } from 'styled-components';
import { useStore } from '../store/store';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }

    * {
        box-sizing: inherit;
        margin: 0;
        padding: 0;

        &:after,
        &:before {
            box-sizing: inherit;
        }
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    input,
    textarea {
        padding: .5rem;
        border-radius: 5px;
    }

    input[type="submit"] {
        cursor: pointer;
    }
`;

const theme: ITheme = {
    colors: {
        accent: '#5575e8',
        hover: '#3357da',
        inputBorder: '#dcdcdc',
        active: '#1641db',
        inputHover: '#000',
        btnColor: '#fff',
    },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default MyApp;
