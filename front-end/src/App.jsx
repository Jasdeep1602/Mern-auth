import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <>
      <div>hello</div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/registration' element={<RegistrationPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
