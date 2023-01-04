import { createGlobalStyle } from "styled-components";

interface ThemeContext {
    theme:{
        colors: {
            bg: string
            bgLighter: string
            bgDrawer: string
            buttonColor: string
            borderColor: string
            linkColor: string
        }
    }
}

const GlobalStyles = createGlobalStyle<ThemeContext>`
    :root {
        --bg: ${({ theme }) => theme.colors.bg};
        --bg-lighter: ${({ theme }) => theme.colors.bgLighter};
        --bg-drawer: ${({ theme }) => theme.colors.bgDrawer};
        --button-color: ${({ theme }) => theme.colors.buttonColor};
        --5: #7B2CBF;
        --6: #9D4EDD;
        --border-color: ${({ theme }) => theme.colors.borderColor};
        --link-color: ${({ theme }) => theme.colors.linkColor};
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
        color: var(--color-white); //TEMP
        background: var(--bg);
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

    input, textarea, select {
        font-family: 'Ubuntu Condensed', sans-serif;
        background: transparent;
        outline: none;
        border:none;
    }

    //autofill background hack
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--bg) inset !important;
        -webkit-text-fill-color: white !important;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`

export default GlobalStyles;
