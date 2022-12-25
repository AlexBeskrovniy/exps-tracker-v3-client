import { BrowserRouter, Routes, Route } from "react-router-dom";

import "normalize.css";
import ThemeProvider from "./providers/ThemeProvider";
import GlobalStyles from "./components/styled/GlobalStyles.styled";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MasterPage from "./pages/MasterPage";
import Records from "./pages/Records";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <ThemeProvider>
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
