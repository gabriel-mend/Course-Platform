import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Baloo Bhai 2";
    }
`;