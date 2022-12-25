import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "normalize.css";
import GlobalStyles from "./components/styled/GlobalStyles.styled";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MasterPage from "./pages/MasterPage";
import Records from "./pages/Records";
import Categories from "./pages/Categories";

import { themes } from "./config/themeConfig"

type themeKey = {
  neon: string
  classic: string
}

const userTheme = localStorage.getItem('theme') as keyof themeKey || 'neon';

const App = () => {
  const [colors, setTheme] = useState(themes[userTheme]);

  const changeTheme = (theme: keyof themeKey) => { 
    setTheme(themes[theme]);
    localStorage['theme'] = theme;
  }

  return (
    <ThemeProvider theme={{ colors, userTheme, changeTheme }}>
      <BrowserRouter>
        <GlobalStyles />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="main" element={<MasterPage />}>
              <Route index element={<p>Main</p>} />
              <Route path="records" element={<Records />}/>
              <Route path="categories" element={<Categories />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
