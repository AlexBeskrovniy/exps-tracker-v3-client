import { useState } from "react";
import { ThemeProvider as GlobalTheme } from "styled-components";

import { themes } from "../config/themeConfig";

type themeKey = {
    neon: string
    classic: string
  }

interface ThemeProviderProps {
    children: React.ReactNode;
}
  
const userTheme = localStorage.getItem('theme') as keyof themeKey || 'neon';

const ThemeProvider = (props: ThemeProviderProps) => {
    const [colors, setTheme] = useState(themes[userTheme]);

    const changeTheme = (theme: keyof themeKey) => { 
        setTheme(themes[theme]);
        localStorage['theme'] = theme;
    }

    return(
        <GlobalTheme theme={{ colors, userTheme, changeTheme }}>
            { props.children }
        </GlobalTheme>
    );
}

export default ThemeProvider;