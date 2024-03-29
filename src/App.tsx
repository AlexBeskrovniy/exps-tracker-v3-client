import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'normalize.css';
import ThemeProvider from 'providers/ThemeProvider';
import GlobalStyles from 'styled/GlobalStyles.styled';
import ProtectedRoute from 'providers/ProtectedRoute';
import StartPage from 'pages/StartPage';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import MasterPage from 'pages/MasterPage';
import Main from 'pages/Main';
import Records from 'pages/Records';
import Categories from 'pages/Categories';
import SvgSprite from './components/SvgSprite';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <SvgSprite />
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="main" element={
                <ProtectedRoute>
                  <MasterPage />
                </ProtectedRoute>
              }>
                <Route index element={<Main />} />
                <Route path="records" element={<Records />}/>
                <Route path="categories" element={<Categories />}/>
              </Route>
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
