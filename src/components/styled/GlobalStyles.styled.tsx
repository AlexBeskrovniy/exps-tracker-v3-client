import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --bg-neon:#10002B;
        --bg-lighter-neon: #240046;
        --bg-drawer: #3C096C;
        --button-neon: #5A189A;
        --5: #7B2CBF;
        --6: #9D4EDD;
        --border-neon: #C77DFF;
        --link-color: #E0AAFF;
        --color-white: #fff;
    }
    
    * {
        padding: 0px;
        margin: 0px;
        border: none;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Ubuntu Condensed', sans-serif;
        background: var(--bg-neon);
        min-height: 100vh;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        font-family: 'Oswald', sans-serif;
    }

    a {
        width: 100%;
        outline: none;
        text-decoration: none;
        text-align: center;
        color: var(--link-color);
        font-size: 1.2rem;
    }

    a:hover {
        opacity: .8;
    }

    form {
        font-family: 'Oswald', sans-serif;
    }

    input {
        font-family: 'Ubuntu Condensed', sans-serif;
        background: transparent;
        outline: none;
        border:none;
    }

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--bg-neon) inset !important;
        -webkit-text-fill-color: white !important;
    }
`

export default GlobalStyles;
