import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'normalize.css';
import GlobalStyles from './components/styled/GlobalStyles.styled';
import StartPage from './pages/StartPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from './pages/Main';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
